// src/pages/CsvAndTxtPage.js
import React, { useState } from 'react';

const CsvAndTxtPage = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [txtFile, setTxtFile] = useState(null);

  const handleCsvFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleTxtFileChange = (e) => {
    setTxtFile(e.target.files[0]);
  };

  const handleCsvUpload = () => {
    if (csvFile) {
      console.log('CSV File Uploaded:', csvFile.name);
    } else {
      alert('Please select a CSV file to upload!');
    }
  };

  const handleTxtUpload = () => {
    if (txtFile) {
      console.log('TXT File Uploaded:', txtFile.name);
    } else {
      alert('Please select a TXT file to upload!');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-[#D7A0B4] mb-6">Upload CSV and TXT Files</h2>

      {/* CSV File Upload Section */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2 text-[#1f2937]">Select CSV File</label>
        <input
          type="file"
          accept=".csv"
          onChange={handleCsvFileChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button
          onClick={handleCsvUpload}
          className="mt-3 bg-[#D7A0B4] text-white p-2 rounded-md hover:bg-[#D27A8C] transition-all"
        >
          Upload CSV
        </button>
      </div>

      {/* TXT File Upload Section */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2 text-[#1f2937]">Select TXT File</label>
        <input
          type="file"
          accept=".txt"
          onChange={handleTxtFileChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button
          onClick={handleTxtUpload}
          className="mt-3 bg-[#D7A0B4] text-white p-2 rounded-md hover:bg-[#D27A8C] transition-all"
        >
          Upload TXT
        </button>
      </div>

      {/* File Selected Info */}
      <div className="mt-6 text-[#1f2937]">
        {csvFile && <p className="text-lg">CSV File Selected: {csvFile.name}</p>}
        {txtFile && <p className="text-lg">TXT File Selected: {txtFile.name}</p>}
      </div>
    </div>
  );
};

export default CsvAndTxtPage;
