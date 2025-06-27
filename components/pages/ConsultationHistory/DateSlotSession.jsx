"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const dates = new Array(firstDay).fill("");
  for (let i = 1; i <= totalDays; i++) {
    dates.push(i);
  }
  return dates;
};

const DateSlotSession = () => {
  const router = useRouter();
  const handleMakePaymentSession = () => {
    router.push("/make-payment-session");
  };

  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const [durationOpen, setDurationOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);

  const durations = ["15 minutes", "30 minutes", "45 minutes"];
  const types = ["Video Call", "Audio Call", "Chat"];

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <>
      <div className="rounded-2xl bg-[#2D5356] py-4 pl-4 text-white md:flex-row md:pl-6">
        <div className="text-md flex items-center justify-between font-semibold md:text-[1.5rem]">
          <h1>
            <i
              onClick={() => router.back()}
              className="ri-arrow-left-line mr-2 cursor-pointer font-normal md:mr-9"
            ></i>
            Select Date and Slot for booking session
          </h1>
        </div>
      </div>

      <div className="mt-7 flex min-h-screen flex-col gap-6 md:flex-row md:p-6">
        {/* Left - Profile Info */}
        <div className="bg-[#E1F0EF] px-3 py-6 md:w-7/12 md:pb-14">
          <div className="bg-light relative rounded-lg px-3 py-6">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="flex w-96 flex-col items-center gap-1 md:gap-2">
                <img src="../image/sheprofile.svg" alt="sheprofile" />
                <div className="absolute mt-18 ml-18 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-[0.9rem] text-white">
                  <FaCheck />
                </div>
                <p className="text-primary Roboto text-xs font-medium">
                  <i className="ri-star-fill pr-1 text-[1.1rem] text-yellow-400"></i>
                  4.2
                </p>
              </div>
              <div className="-mt-4 leading-14">
                <h2 className="text-hcolor abril text-sm font-bold tracking-wide md:text-[1.6rem]">
                  Olischuk Olga
                </h2>
                <p className="text-primary text-sm">
                  A psychiatrist is a medical doctor who specializes in mental
                  health, including substance use disorders.
                </p>
              </div>
            </div>

            <div className="mt-4 bg-[#E1F0EF] px-2 py-3">
              <h3 className="text-hcolor mb-2 text-[1rem] font-semibold md:text-[1.3rem]">
                Language
              </h3>
              <ul className="text-primary list-disc pl-5 text-[0.9rem] md:text-[1rem]">
                <li>Marathi</li>
                <li>Hindi</li>
                <li>English</li>
              </ul>
            </div>

            <div className="mt-4 bg-[#E1F0EF] px-2 py-3">
              <h3 className="text-hcolor mb-2 text-[1rem] font-semibold md:text-[1.3rem]">
                Specializations
              </h3>
              <ul className="text-primary list-disc pl-5 text-[0.9rem] md:text-[1rem]">
                <li>Mental Health</li>
                <li>Physiotherapy</li>
                <li>Massage Therapy</li>
              </ul>
            </div>

            <div className="mt-4 bg-[#E1F0EF] px-2 py-3">
              <h3 className="text-hcolor mb-2 text-[1rem] font-semibold md:text-[1.3rem]">
                Education
              </h3>
              <ul className="text-primary list-disc pl-5 text-[0.9rem] md:text-[1rem]">
                <li>MBBS - Bharti Vidyapith, Pune, 2020</li>
                <li>MD - Bharti Vidyapith, Pune, 2020</li>
              </ul>
            </div>

            <div className="mt-4 bg-[#E1F0EF] px-2 py-3">
              <h3 className="text-hcolor mb-2 text-[1rem] font-semibold md:text-[1.3rem]">
                Category
              </h3>
              <ul className="text-primary list-disc pl-5 text-[0.9rem] md:text-[1rem]">
                <li>Trauma</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right - Calendar & Slots */}
        <div className="w-full bg-[#E1F0EF] px-3 pt-5 pb-3">
          <div className="rounded-lg p-4">
            <h3 className="text-hcolor text-[1.1rem] font-bold md:text-[1.3rem]">
              Select the Date of Appointment
            </h3>
            <p className="text-hcolor md:text-md text-sm">
              Session must be booked within{" "}
              <span className="font-medium text-blue-600">2 months</span> of
              purchase
            </p>
            <hr className="pb-1.5" />

            {/* Calendar */}
            <div className="bg-light text-hcolor mb-2 rounded-lg text-sm font-medium shadow-md">
              <div className="text-light flex items-center justify-between bg-[#4B918C] px-3 py-2 text-[1.1rem] md:text-[1.3rem]">
                <span>
                  {monthNames[month]} {year}
                </span>
                <span className="flex gap-3">
                  <button onClick={prevMonth}>
                    <MdArrowBackIos />
                  </button>
                  <button onClick={nextMonth}>
                    <MdArrowForwardIos />
                  </button>
                </span>
              </div>

              <div className="grid grid-cols-7 text-center text-[1rem] text-gray-700 md:text-[1.2rem]">
                {days.map((day, i) => (
                  <div key={i} className="py-1">
                    {day}
                  </div>
                ))}
                {getDaysInMonth(year, month).map((date, i) => (
                  <div key={i} className="py-1">
                    {date !== "" ? (
                      <button className="h-8 w-8 rounded hover:bg-green-200">
                        {date}
                      </button>
                    ) : (
                      <span></span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="bg-light mt-3 rounded-lg px-2 py-3">
              <h4 className="text-hcolor mb-2 md:text-[1.1rem]">
                Afternoon 7 slots
              </h4>
              <div className="text-primary grid grid-cols-4 gap-2 text-sm md:text-[0.85rem]">
                {[
                  "1:00 PM",
                  "1:30 PM",
                  "2:00 PM",
                  "2:30 PM",
                  "3:00 PM",
                  "3:30 PM",
                  "4:00 PM",
                ].map((time, i) => (
                  <button
                    key={i}
                    className="rounded-md border border-gray-300 px-2 py-2 hover:bg-green-100"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-light mt-3 rounded-lg px-2 py-3">
              <h4 className="text-hcolor mb-2 md:text-[1.1rem]">
                Evening 5 slots
              </h4>
              <div className="text-primary grid grid-cols-4 gap-2 text-sm md:text-[0.85rem]">
                {["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"].map((time, i) => (
                  <button
                    key={i}
                    className="rounded-md border border-gray-300 px-2 py-2 hover:bg-green-100"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Dropdowns */}
            <div className="mx-auto max-w-md">
              <div className="bg-light mt-3 rounded-lg px-3 py-2">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() => setDurationOpen(!durationOpen)}
                >
                  <h4 className="text-md text-hcolor md:text-[1.05rem]">
                    Select Session Duration
                  </h4>
                  <span className="text-secondary text-[1.25rem]">
                    <IoMdArrowDropdown />
                  </span>
                </div>
                {durationOpen && (
                  <ul className="mt-2 rounded-md border border-gray-200 bg-white shadow-lg">
                    {durations.map((item, idx) => (
                      <li
                        key={idx}
                        className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="bg-light mt-3 rounded-lg px-3 py-2">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() => setTypeOpen(!typeOpen)}
                >
                  <h4 className="text-md text-hcolor md:text-[1.05rem]">
                    Select Session Type
                  </h4>
                  <span className="text-secondary text-[1.25rem]">
                    <IoMdArrowDropdown />
                  </span>
                </div>
                {typeOpen && (
                  <ul className="mt-2 rounded-md border border-gray-200 bg-white shadow-lg">
                    {types.map((item, idx) => (
                      <li
                        key={idx}
                        className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <button onClick={handleMakePaymentSession} className="bg-hcolor text-light mt-6 w-full cursor-pointer rounded-md px-14 py-2.5 text-[1rem] md:text-[1.2rem]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateSlotSession;
