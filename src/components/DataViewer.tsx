import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, Heart, Baby, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { DataTable } from './DataTable';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { downloadCSV } from '../utils/csvExport';

interface DataViewerProps {
  tableName: string;
  title: string;
  icon: 'heart' | 'baby';
}

export const DataViewer: React.FC<DataViewerProps> = ({ tableName, title, icon }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data: fetchedData, error: fetchError } = await supabase
        .from(tableName)
        .select('*');

      if (fetchError) {
        throw new Error(fetchError.message);
      }

      setData(fetchedData || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // Fetch all data for download (without pagination)
      const { data: allData, error: downloadError } = await supabase
        .from(tableName)
        .select('*');

      if (downloadError) {
        throw new Error(downloadError.message);
      }

      if (allData && allData.length > 0) {
        downloadCSV(allData, `${tableName}_${new Date().toISOString().split('T')[0]}.csv`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to download data');
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableName]);

  const IconComponent = icon === 'heart' ? Heart : Baby;
  const iconColor = icon === 'heart' ? 'text-pink-500' : 'text-blue-500';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back</span>
              </Link>
              <div className="flex items-center gap-2 ml-4">
                <IconComponent className={`w-8 h-8 ${iconColor}`} />
                <Database className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
                <p className="text-sm text-gray-600">Comprehensive dataset analysis</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {loading && <LoadingSpinner />}
        
        {error && (
          <ErrorMessage 
            message={error}
            onRetry={fetchData}
          />
        )}
        
        {!loading && !error && (
          <>
            {data.length === 0 ? (
              <div className="text-center py-12">
                <Database className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Found</h3>
                <p className="text-gray-600">The database table appears to be empty.</p>
              </div>
            ) : (
              <DataTable 
                data={data}
                onDownload={handleDownload}
                isDownloading={isDownloading}
                title={title}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>Data Viewer - Secure dataset management and export</p>
          </div>
        </div>
      </footer>
    </div>
  );
};