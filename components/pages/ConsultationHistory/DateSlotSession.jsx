"use client";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
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
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

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

  const router = useRouter();

  return (
    <>
      <div className="rounded-2xl bg-[#2D5356] py-4 pl-4 text-white md:flex-row md:pl-6">
        <div className="text-md flex items-center justify-between font-semibold md:text-[1.5rem]">
          <h1>
            <span>
              <i
                onClick={() => router.back()}
                className="ri-arrow-left-line mr-2 cursor-pointer font-normal md:mr-9"
              ></i>
            </span>
            Select Date and Slot for booking session
          </h1>
        </div>
      </div>

      <div className="mt-7 flex min-h-screen flex-col gap-6 md:mt-0 md:flex-row md:p-6">
        {/* Left Section - Profile */}
        <div className="bg-[#E1F0EF] px-3 py-6 md:w-7/12 md:pb-14">
          <div className="bg-light relative rounded-lg px-3 py-6 md:py-6">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="flex w-96 flex-col items-center gap-1 md:gap-2">
                <img src="../image/sheprofile.svg" alt="sheprofile" />
                <div className="text-light absolute mt-18 ml-18 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-[0.9rem]">
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
                  7 Years A psychiatrist is a medical doctor (an M.D. or D.O.)
                  who specializes in mental health, including substance use
                  disorders. Psychiatrists are qualified to assess both the
                  mental and physical aspects of psychological
                  problems.Experience
                </p>
              </div>
            </div>

            {/* Language */}
            <div className="mt-4 bg-[#E1F0EF] px-2 py-3 md:px-3">
              <h3 className="text-hcolor mb-2 px-1 text-[1rem] font-semibold md:text-[1.3rem]">
                Language
              </h3>
              <ul className="text-primary list-disc space-y-1 pl-5 text-[0.9rem] md:text-[1rem]">
                <li>Marathi</li>
                <li>Hindi</li>
                <li>English</li>
              </ul>
            </div>

            {/* Specializations */}
            <div className="mt-4 bg-[#E1F0EF] px-2 py-3 md:px-3">
              <h3 className="text-hcolor mb-2 px-1 text-[1rem] font-semibold md:text-[1.3rem]">
                Specializations
              </h3>
              <ul className="text-primary list-disc space-y-1 pl-5 text-[0.9rem] md:text-[1rem]">
                <li>Mental Health</li>
                <li>Physiotherapy</li>
                <li>Massage Therapy</li>
              </ul>
            </div>

            {/* Education */}
            <div className="mt-4 bg-[#E1F0EF] px-2 py-3 md:px-3">
              <h3 className="text-hcolor mb-2 px-1 text-[1rem] font-semibold md:text-[1.3rem]">
                Education
              </h3>
              <ul className="text-primary list-disc space-y-1 pl-5 text-[0.9rem] md:text-[1rem]">
                <li>MBBS - Bharti Vidyapith, Pune, 2020</li>
                <li>MD - Bharti Vidyapith, Pune, 2020</li>
                <li>MD - Bharti Vidyapith, Pune, 2020</li>
              </ul>
            </div>

            {/* Category */}
            <div className="mt-4 bg-[#E1F0EF] px-2 py-3 md:px-3">
              <h3 className="text-hcolor mb-2 px-1 text-[1rem] font-semibold md:text-[1.3rem]">
                Category
              </h3>
              <ul className="text-primary list-disc space-y-1 pl-5 text-[0.9rem] md:text-[1rem]">
                <li>Tarauma</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - Calendar and Slots */}
        <div className="bg-[#E1F0EF] px-3 pt-5 pb-3">
          <div className="rounded-lg">
            <div className="bg-light rounded-lg p-4 leading-4">
              <h3 className="text-hcolor mb-2 pt-2 text-[1.1rem] font-bold md:text-[1.3rem]">
                Select the Date of Appointment
              </h3>
              <p className="md:text-md text-hcolor mb-0.5 text-sm leading-4">
                The session included in the package can be available within
                <span className="font-medium text-blue-600"> 2 month </span>
                from date of purchase
              </p>
              <hr className="pb-1.5 text-gray-300"></hr>

              <div className="bg-light text-hcolor f mb-2 rounded-lg text-sm font-medium shadow-md">
                <div className="text-light mb-2 flex items-center justify-between rounded-t-lg bg-[#4B918C] px-3 py-2 text-[1.1rem] md:text-[1.3rem]">
                  <span className="">
                    {monthNames[month]} {year}
                  </span>
                  <span className="flex items-center gap-3">
                    <button
                      onClick={prevMonth}
                      className="cursor-pointer text-xl hover:text-black"
                    >
                      <MdArrowBackIos />
                    </button>

                    <button
                      onClick={nextMonth}
                      className="cursor-pointer text-xl hover:text-black"
                    >
                      <MdArrowForwardIos />
                    </button>
                  </span>
                </div>

                <div className="grid grid-cols-7 px-1 text-center text-[1rem] text-gray-700 md:text-[1.2rem]">
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
            </div>
            {/* Time Slots */}
            <div className="bg-light mt-3 rounded-lg px-2 py-3">
              <h4 className="text-md text-hcolor mb-2 md:text-[1.1rem]">
                Afternoon 7 slots
              </h4>
              <hr className="pb-3 text-gray-300"></hr>
              <div className="text-primary grid grid-cols-4 gap-2 text-sm md:text-[1rem]">
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
              <h4 className="text-md text-hcolor mb-2 md:text-[1.1rem]">
                Evening 5 slots
              </h4>
              <hr className="pb-3 text-gray-300"></hr>
              <div className="text-primary grid grid-cols-4 gap-2 text-sm md:text-[1rem]">
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
            <div className="bg-light mt-3 flex items-center justify-between rounded-lg px-3 py-2">
              <h4 className="text-md text-hcolor md:text-[1.05rem]">
                Select Session Duration 30 / 60 min
              </h4>
              <span className="text-secondary cursor-pointer text-[1.25rem]">
                {" "}
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="bg-light mt-3 flex items-center justify-between rounded-lg px-3 py-2">
              <h4 className="text-md text-hcolor md:text-[1.05rem]">
                Select Session Type Call / Video Call{" "}
              </h4>
              <span className="text-secondary cursor-pointer text-[1.25rem]">
                {" "}
                <IoMdArrowDropdown />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateSlotSession;
