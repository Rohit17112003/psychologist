import React from "react";

const psychologists = [
  {
    name: "Nitesh Nikhade",
    role: "Psychologist",
    experience: "12 Years Experience",
    image: "../image/card_img.svg", 
  },
  {
    name: "Nitesh Nikhade",
    role: "Psychologist",
    experience: "12 Years Experience",
    image: "../image/card_img.svg",
  },
  {
    name: "Nitesh Nikhade",
    role: "Psychologist",
    experience: "12 Years Experience",
    image: "../image/card_img.svg",
  },
   {
    name: "Nitesh Nikhade",
    role: "Psychologist",
    experience: "12 Years Experience",
    image: "../image/card_img.svg",
  },
   {
    name: "Nitesh Nikhade",
    role: "Psychologist",
    experience: "12 Years Experience",
    image: "../image/card_img.svg",
  },
   {
    name: "Nitesh Nikhade",
    role: "Psychologist",
    experience: "12 Years Experience",
    image: "../image/card_img.svg",
  },
];

const AllPsychologists = () => {
  return (
    <div className="w-full md:px-2 px-0">
      {/* Top Section */}
      <div className="bg-[#2D5356] text-white rounded-2xl md:px-6 px-2 py-2 flex  md:flex-row justify-between items-center md:gap-6">
        <div className="flex items-center gap-4">
          <img
            src="../image/psychologits.svg"
            alt="Psychologist Icon"
            className="w-28 md:w-36"
          />
          <div>
            <h1 className="text-lg md:text-2xl font-semibold">
              Add New Psychologist
            </h1>
            <p className="text-sm md:text-base">
              Add, edit and view psychologist information
            </p>
          </div>
        </div>
        <span className="text-3xl md:text-4xl">
          <i className="ri-arrow-right-s-line"></i>
        </span>
      </div>

      
      <div className="my-6 relative w-full md:w-2/5 px-0 md:px-4">
        <i className="ri-search-line absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        <input
          type="text"
          placeholder="Search here using name/number..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300  focus:ring-[#2D5356] outline-none"
        />
      </div>

      {/* Psychologist Cards */}
      <div className="grid gap-x-12 gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-0 md:px-4">
        {psychologists.map((psych, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm shadow-gray-300 p-1.5 flex flex-col items-center text-center"
          >
            <img
              src={psych.image}
              alt={psych.name}
              className="w-24 h-24 rounded-full object-cover p-2.5"
            />
            <h2 className="text-lg text-primary font-semibold">{psych.name}</h2>
            <p className="text-sm text-gray-600">{psych.role}</p>
            <p className="text-sm text-gray-500">{psych.experience}</p>
            <button className="text-blue-400 mt-2 font-medium hover:underline">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPsychologists;
