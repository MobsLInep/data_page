import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { DataViewer } from './components/DataViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/mother" 
          element={
            <DataViewer 
              tableName="pregnancy_data" 
              title="Mother Data" 
              icon="heart" 
            />
          } 
        />
        <Route 
          path="/children" 
          element={
            <DataViewer 
              tableName="child_survey" 
              title="Children Data" 
              icon="baby" 
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;