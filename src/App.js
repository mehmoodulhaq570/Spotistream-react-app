// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SpotifyPage from './pages/SpotifyPage';
import CsvAndTxtPage from './pages/CsvAndTxtPage';
import ManualPage from './pages/ManualPage';
import './styles/tailwind.css';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 p-6 bg-[#f3f4f6] min-h-screen">
          <Routes>
            <Route path="/spotify" element={<SpotifyPage />} />
            <Route path="/csv-and-txt" element={<CsvAndTxtPage />} />
            <Route path="/manual" element={<ManualPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
