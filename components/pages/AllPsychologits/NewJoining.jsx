"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NewJoining = () => {
  const [psychologists, setPsychologists] = useState([
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
  ]);
 

  const router = useRouter();


  return (
    <div className="relative w-full px-0 md:px-2">
      {/* Top Section */}
      <div className="rounded-2xl bg-[#2D5356] py-4 pl-4 text-white md:flex-row md:pl-6">
        <div className="text-md flex items-center justify-between font-semibold md:text-[1.5rem]">
          <h1>
            <span>
              <i
                onClick={() => router.back()}
                className="ri-arrow-left-line mr-2 cursor-pointer font-normal md:mr-9"
              ></i>
            </span>
            New request for joining
          </h1>
        </div>
      </div>

      <div className="relative my-6 w-full px-0 md:w-2/5 md:px-4">
        <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 transform text-lg text-gray-500 md:left-8" />
        <input
          type="text"
          placeholder="Search here using ID...."
          className="w-full rounded-full border border-gray-300 py-2 pr-4 pl-10 outline-none focus:ring-[#2D5356]"
        />
      </div>

      {/* Psychologist Cards */}
      <div className="grid grid-cols-1 gap-7 gap-x-7 px-0 sm:grid-cols-2 md:px-4 lg:grid-cols-3 pb-16">
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
            <h2 className="text-hcolor abril md:text-[1rem] text-shadow-md font-semibold">{psych.name}</h2>
            <p className="text-sm text-gray-600">{psych.role}</p>
            <p className="text-sm text-gray-500">{psych.experience}</p>
           <div className="flex justify-center gap-8 items-center py-4 ">
            <button className="text-white cursor-pointer bg-red-500 hover:bg-red-600 rounded-md px-4 py-1 text-[.97rem]">Rejected</button>
            <button className="text-white cursor-pointer bg-green-500 hover:bg-green-600 rounded-md px-4 py-1 text-[.97rem]">Approved</button>
           </div>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default NewJoining;
