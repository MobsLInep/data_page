import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Baby, Database } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Heart className="w-8 h-8 text-pink-500" />
                <Database className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Data Viewer</h1>
                <p className="text-sm text-gray-600">Comprehensive dataset analysis</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Data Category</h2>
          <p className="text-lg text-gray-600">Choose which dataset you would like to view and analyze</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mother Data Card */}
          <Link
            to="/mother"
            className="group bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:border-pink-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6 group-hover:bg-pink-200 transition-colors">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mother Data</h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="inline-flex items-center text-pink-600 font-medium group-hover:text-pink-700">
                View Mother Data
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Children Data Card */}
          <Link
            to="/children"
            className="group bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                <Baby className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Children Data</h3>
              <p className="text-gray-600 mb-6">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
              </p>
              <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                View Children Data
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
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