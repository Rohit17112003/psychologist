"use client";

import { useRouter } from "next/navigation";
import { MdDelete, MdEdit } from "react-icons/md";
import { useRef, useState } from "react";

const UserProfile = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = () => {
    const input = inputRef.current;
    if (input) {
      navigator.clipboard.writeText(input.value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <>
      <div className="rounded-2xl bg-[#2D5356] py-4 pl-4 text-white md:flex-row md:pl-6">
        <div className="flex items-center justify-between text-md font-semibold md:text-[1.5rem]">
          <h1>
            <span>
              <i
                onClick={() => router.back()}
                className="ri-arrow-left-line mr-2 cursor-pointer font-normal md:mr-9"
              ></i>
            </span>
            Users Details
          </h1>
          <div className="hidden items-center gap-2 px-10 md:flex">
            <button className="text-light flex cursor-pointer items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-[0.9rem] hover:bg-green-600 md:text-[1.3rem]">
              Edit <MdEdit />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pr-6 pl-0 md:pl-14">
        <div className="hidden items-center gap-10 md:flex">
          <img src="/image/vedant.svg" alt="user" className="mt-7 h-28 w-28" />
         
        </div>
        <button className="text-light mt-7 rounded-md bg-[#F13E3E] px-4 md:px-8 py-2 text-[1rem] md:text-[1.3rem] cursor-pointer">
          Block
        </button>
      </div>

      <div className="mt-5 md:mt-7 pb-16">
        <div className="mt-5 md:px-6">
          <form className="grid gap-x-14 gap-y-8 md:grid-cols-2 text-hcolor">
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-user-3-fill text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="Nitesh Nikhade"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-men-fill text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="Male"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>
          
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-calendar-fill text-secondary text-2xl"></i>
              <input
                type="date"
                placeholder="17/11/2003"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>
             <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-phone-fill text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="+917364474483"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-mail-fill text-secondary text-2xl"></i>
              <input
                type="email"
                placeholder="Nitesh26374@gmail.com"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>
              <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-map-pin-2-fill text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="Address"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>
            
          
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
