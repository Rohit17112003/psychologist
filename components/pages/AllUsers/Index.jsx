import React from "react";

const psychologists = [
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
];

const AllUsers = () => {
  return (
    <div className="w-full px-0 md:px-2">
      {/* Top Section */}
      <div className=" gap-6 rounded-2xl bg-[#2D5356] py-5 md:pl-10 pl-5 text-white md:flex-row">
        <h1 className="text-xl font-semibold md:text-2xl">Add Users</h1>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-7 gap-x-13 px-0 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
        {psychologists.map((psych, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-xl bg-white p-1.5 text-center shadow-sm shadow-gray-300"
          >
            <img
              src={psych.image}
              alt={psych.name}
              className="h-24 w-24 rounded-full object-cover p-2.5"
            />
            <h2 className="text-lg  text-primary font-semibold">{psych.name}</h2>
            <p className="text-sm text-gray-600">{psych.role}</p>
            <p className="text-sm text-gray-500">{psych.experience}</p>
            <button className="mt-2 font-medium text-blue-400 hover:underline">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
