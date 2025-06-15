"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const AllPsychologists = () => {
  const [showPopup, setShowPopup] = useState(false);
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

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    experience: "",
    image: "../image/card_img.svg",
  });

  const handleAddPsychologist = (e) => {
    e.preventDefault();
    setPsychologists([...psychologists, formData]);
    setFormData({
      name: "",
      role: "",
      experience: "",
      image: "../image/card_img.svg",
    });
    setShowPopup(false);
  };

  const router = useRouter();
  const handleProfile = () => {
    router.push("/profile");
  };

  return (
    <div className="relative w-full px-0 md:px-2">
      {/* Top Section */}
      <div
        onClick={() => setShowPopup(true)}
        className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#2D5356] px-2 py-2 text-white md:flex-row md:gap-6 md:px-6"
      >
        <div className="flex items-center md:gap-10 gap-4">
          <img
            src="../image/psychologits.svg"
            alt="Psychologist Icon"
            className="w-20 md:w-36"
          />
          <div>
            <h1 className="text-sm font-semibold md:text-[1.7em]">
              Add New Psychologist
            </h1>
            <p className="text-[0.7rem] font-normal md:text-[1.4rem]">
              Add, edit and view psychologist information
            </p>
          </div>
        </div>
        <span className="text-xl">
          <IoIosArrowForward />
        </span>
      </div>

      <div className="relative my-6 w-full px-0 md:w-2/5 md:px-4">
        <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 transform text-lg text-gray-500 md:left-8" />
        <input
          type="text"
          placeholder="Search here using name/number..."
          className="w-full rounded-full border border-gray-300 py-2 pr-4 pl-10 outline-none focus:ring-[#2D5356]"
        />
      </div>

      {/* Psychologist Cards */}
      <div className="grid grid-cols-1 gap-7 gap-x-12 px-0 sm:grid-cols-2 md:px-4 lg:grid-cols-3">
        {psychologists.map((psych, index) => (
          <div
            key={index}
            onClick={handleProfile}
            className="flex cursor-pointer flex-col items-center rounded-xl bg-white p-1.5 text-center shadow-sm shadow-gray-300"
          >
            <img
              src={psych.image}
              alt={psych.name}
              className="h-24 w-24 rounded-full object-cover p-2.5"
            />
            <h2 className="text-primary md:text-lg text-shadow-md font-semibold">{psych.name}</h2>
            <p className="text-sm text-gray-600">{psych.role}</p>
            <p className="text-sm text-gray-500">{psych.experience}</p>
            <button className="mt-2 font-medium text-blue-400 hover:underline">
              View
            </button>
          </div>
        ))}
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="bg-opacity-60 fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-md rounded-xl bg-white p-6">
            <button
              className="absolute top-3 right-3 cursor-pointer text-xl text-gray-600"
              onClick={() => setShowPopup(false)}
            >
              <IoMdClose />
            </button>
            <h2 className="mb-4 text-lg font-semibold">Add Psychologist</h2>
            <form onSubmit={handleAddPsychologist} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Experience"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
              <button
                type="submit"
                className="w-full cursor-pointer rounded-md bg-[#2D5356] py-2 text-white hover:bg-[#244747]"
              >
                Add Doctor
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPsychologists;
