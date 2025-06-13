// components/SecondHero.jsx
import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SecondHero = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Inbox</h2>

        {/* Search & Filter */}
        <div className="mb-6 flex justify-between items-center border border-gray-300 rounded-lg p-3 bg-gray-100">
          <div className="flex items-center w-full">
            <FaSearch className="text-gray-600 mr-2" />
            <input type="text" placeholder="Search here..." className="w-full bg-transparent focus:outline-none px-2" />
          </div>
          <button className="ml-4 bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
            <FaFilter className="text-gray-600" />
          </button>
        </div>

        {/* Inbox Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="p-3 border-b flex justify-between text-gray-700">
              <p className="font-medium">Shubham Roy - abc@gmail.com</p>
              <p className="text-gray-500">18-07-2023</p>
            </div>
          ))}
        </div>

        {/* Reviews & Feedback Section */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Patient Reviews */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Patient Reviews for Doctors</h2>
            {[...Array(2)].map((_, index) => (
              <div key={index} className="border-b pb-3 mb-3">
                <p className="font-semibold">Shubham Roy - 4/8/23</p>
                <p className="text-yellow-500">★★★★★</p>
                <p>Dr. Ramesh provided excellent care and attention.</p>
              </div>
            ))}
          </div>

          {/* CEO Office Feedback */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">CEO Office Feedback</h2>
            {[...Array(2)].map((_, index) => (
              <div key={index} className="border-b pb-3 mb-3">
                <p className="font-semibold">Ramesh Kumar - 4/8/23</p>
                <p className="text-yellow-500">★★★★★</p>
                <p>Excellent attention and care provided.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
