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

  const fields = [
    {
      label: "Bio",
      type: "textarea",
      placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    { label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
    { label: "Date Of Birth", type: "date" },
    { label: "Specialization", placeholder: "e.g. Clinical Psychology" },
    { label: "Education", placeholder: "e.g. M.A. Psychology" },
    { label: "Experience", placeholder: "e.g. 12 Years" },
    { label: "Language", placeholder: "e.g. English, Hindi" },
    { label: "Address", placeholder: "e.g. Delhi, India" },
    {
      label: "Moralities/Skills/Technics",
      placeholder: "e.g. CBT, Mindfulness",
    },
    {
      label: "Consultation Type",
      type: "select",
      options: ["Free", "Charged"],
    },
    {
      label: "Chat Consultation Charges/min",
      placeholder: "₹1000",
      type: "number",
    },
    {
      label: "Call Consultation Charges/min",
      placeholder: "₹1000",
      type: "number",
    },
    {
      label: "Video Consultation Charges/min",
      placeholder: "₹1000",
      type: "number",
    },
    { label: "Account Details & UPI", placeholder: "e.g. rohit@upi" },
  ];

  return (
    <div className="relative w-full px-0 md:px-2">
      {/* Top Section */}
      <div
        onClick={() => setShowPopup(true)}
        className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#2D5356] px-2 pt-1 text-white md:flex-row md:gap-6 md:px-6"
      >
        <div className="flex items-center gap-4 md:gap-10">
          <img
            src="../image/psychologits.svg"
            alt="Psychologist Icon"
            className="w-20 md:w-40"
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
          placeholder="Search here using ID...."
          className="w-full rounded-full border border-gray-300 py-2 pr-4 pl-10 outline-none focus:ring-[#2D5356]"
        />
      </div>

      {/* Psychologist Cards */}
      <div className="grid grid-cols-1 gap-7 gap-x-12 px-0 pb-16 sm:grid-cols-2 md:px-4 lg:grid-cols-3">
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
            <h2 className="text-hcolor abril font-semibold text-shadow-md md:text-[1rem]">
              {psych.name}
            </h2>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008c]">
          <div className="scrollbar-hidden relative max-h-screen w-full overflow-y-auto border border-gray-200 bg-white p-0 md:p-6 pt-12 md:pt-10 md:w-8/12 md:rounded-lg">
            {/* Close Button */}
            <button
              className="absolute top-12 right-5 md:right-3 md:top-3 cursor-pointer rounded-full bg-[#00000023] p-1.5 text-xl text-black hover:bg-[#00000034]"
              onClick={() => setShowPopup(false)}
            >
              <IoMdClose />
            </button>

            {/* Form */}
            <form className="mx-auto max-w-3xl p-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                {fields.map(
                  (
                    { label, type = "text", placeholder, options = [] },
                    idx,
                  ) => (
                    <div key={idx} className="col-span-1">
                      <label className="mb-1 block font-medium text-[#2D5356] md:text-lg">
                        {label}
                      </label>
                      {type === "textarea" ? (
                        <textarea
                          placeholder={placeholder || label}
                          className="h-18 w-full resize-none rounded border border-gray-300 px-4 py-2 text-[#2D5356D6] outline-none"
                        />
                      ) : type === "select" ? (
                        <select
                          defaultValue=""
                          className="w-full rounded border border-gray-300 px-4 py-3 text-[#2D5356D6] outline-none"
                        >
                          <option value="" disabled>
                            {placeholder || `Select ${label}`}
                          </option>
                          {options.map((opt, i) => (
                            <option key={i} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={type}
                          placeholder={placeholder || label}
                          className="w-full rounded border border-gray-300 px-4 py-2 text-[#2D5356D6] outline-none"
                        />
                      )}
                    </div>
                  ),
                )}
              </div>

              {/* Upload Documents */}
              <div className="mt-6">
                <label className="mb-2 block font-medium text-[#2D5356]">
                  Upload Documents
                </label>
                <div className="flex gap-4">
                  {[0, 1, 2].map((index) => (
                    <label
                      key={index}
                      className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-400"
                    >
                      <input type="file" className="hidden" />
                      <i className="ri-upload-cloud-2-line text-2xl text-gray-500" />
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <span className="flex justify-center">
                <button
                  type="button"
                  className="mt-8 w-full cursor-pointer rounded-md bg-[#2D5356] py-3 font-semibold text-white transition hover:bg-[#244747] md:w-7/12"
                >
                  Add Doctor
                </button>
              </span>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPsychologists;
