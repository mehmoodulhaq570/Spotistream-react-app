// src/pages/SpotifyPage.js
import React from 'react';

const SpotifyPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#D7A0B4] mb-4">Spotify Playlist</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Manage Your Spotify Playlists</h2>
        <input
          type="text"
          placeholder="Enter Playlist Link"
          className="p-3 mb-4 border border-gray-300 rounded-md w-full"
        />
        <button className="bg-[#D7A0B4] text-white p-3 rounded-md hover:bg-[#D27A8C]">
          Add Playlist
        </button>
      </div>
    </div>
  );
};

export default SpotifyPage;
