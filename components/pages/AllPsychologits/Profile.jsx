"use client";

import { useRouter } from "next/navigation";
import { MdDelete, MdEdit } from "react-icons/md";
import { useRef, useState } from "react";

const Profile = () => {
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
            Psychologist/Counselor Details
          </h1>
          <div className="hidden items-center gap-2 px-10 md:flex">
         
            <button className="text-light flex cursor-pointer items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-[0.9rem] hover:bg-green-600 md:text-[1.2rem]">
              Edit <MdEdit />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pr-6 pl-0 md:pl-12">
        <div className="hidden items-center gap-8 md:flex">
          <img src="/image/user.svg" alt="user" className="mt-7 h-28 w-28" />
          <h1 className="text-secondary font-semibold  mt-7 rounded-md bg-[#E1F0EF] px-4 py-3.5 md:pr-14 text-[1.2rem] md:text-[1.6rem]">
            Wallet Amount - 10,000.00
          </h1>
        </div>
        <button className="text-light mt-7 rounded-md bg-[#F13E3E] px-7 tracking-wide py-2.5 text-[1rem] md:text-[1.3rem] cursor-pointer">
          Inactive
        </button>
      </div>

      <div className="mt-5 md:mt-7 pb-16">
        <div className="mt-5 md:px-6">
        <div className=" flex md:flex-row flex-col mb-8 md:gap-12 gap-8 justify-between">
          <h1 className="text-[1rem] md:text-[1.6rem] bg-[#E1F0EF] pl-3 pr-10 text-[#2D5356] font-semibold py-3.5 w-full rounded-md">Overall Earnings - 10,000.00</h1>
          <h1 className="text-[1rem] md:text-[1.6rem] bg-[#E1F0EF] pl-3 pr-10 text-[#2D5356] font-semibold py-3.5 w-full rounded-md">Admin Earnings - 10,000.00</h1>
        </div>
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
              <i className="ri-graduation-cap-fill text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="Educational Qualififacation"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-user-5-fill text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="5 Years"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className=" ri-home-8-fill text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="Specialization"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>
             <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className=" ri-home-8-fill text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="Moralities/Skills/Technics"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>
              <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className=" ri-calendar-fill text-secondary text-2xl"></i>
              <input
                type="date"
                placeholder="Moralities/Skills/Technics"
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
            </div>{" "}
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-men-fill text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="Male"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>{" "}
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-user-3-fill text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="Verification"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
              <button className="bg-green-500 hover:bg-green-600 text-light rounded-md px-3 py-1 cursor-pointer">Approved</button>
            </div>
            <div className="row-span-2 flex items-start gap-4 rounded-md border border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-camera-ai-line text-secondary text-2xl"></i>
              <textarea
                placeholder={`Chat Consultation - 200\nVideo Consultation - 500\nAudio Consultation - 300`}
                className="text-hcolor w-full resize-none pt-2.5 text-[1rem] outline-0 md:text-[1.2rem]"
                rows={3}
                required
              />
            </div>
             <div className="row-span-2 flex items-start gap-4 rounded-md border border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-home-8-fill text-secondary text-2xl"></i>
              <input
                placeholder="Address"
                className="text-hcolor w-full resize-none pt-2.5 text-[1rem] outline-0 md:text-[1.2rem]"
                rows={3}
                required
              />
            </div>
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-translate-ai-2 text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="English, HIndi, Marathi"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
            </div>
            <div className="flex items-center justify-between gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <input
                type="text"
                placeholder="Debit Money From Account"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
              <button className="text-light bg-hcolor hover:bg-[#203b3d] px-5 py-1 rounded-md text-[1rem] cursor-pointer">Debit</button>
            </div>
             <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-camera-ai-line text-secondary text-2xl"></i>
              <input
                type="text"
                placeholder="Percentage (30% to 90%)"
                className="text-hcolor w-full text-[1rem] outline-0 md:text-[1.2rem]"
                required
              />
              <span><i className="ri-arrow-down-s-line"></i></span>
            </div>
             <div className="flex items-center justify-between gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
             <i className="ri-bank-fill text-[1rem] md:text-[1.3rem]"></i>
              <input
                type="text"
                placeholder="Account Details & UPI"
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

export default Profile;
