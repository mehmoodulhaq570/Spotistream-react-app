// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpotify, FaMusic, FaUpload, FaSearch } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#1f2937] text-white p-6 fixed left-0 top-0">
      <h2 className="text-3xl font-bold text-[#D7A0B4] mb-10">Spotistream</h2>
      <nav>
        <ul>
          <li className="mb-6">
            <Link to="/spotify" className="flex items-center text-lg hover:bg-[#D7A0B4] p-3 rounded-lg transition-all">
              <FaSpotify className="mr-3 text-xl" />
              Spotify Playlist
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/csv-and-txt" className="flex items-center text-lg hover:bg-[#D7A0B4] p-3 rounded-lg transition-all">
              <FaUpload className="mr-3 text-xl" />
              Upload CSV/TXT
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/manual" className="flex items-center text-lg hover:bg-[#D7A0B4] p-3 rounded-lg transition-all">
              <FaSearch className="mr-3 text-xl" />
              Manual Search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
