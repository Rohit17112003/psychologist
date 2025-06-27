"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const MakePaymentSession = () => {
  const router = useRouter();

  const handleMakePaymentSession = () => {
    router.push("/consultation-history");
  };

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

  return (
    <>
      {/* Header */}
      <div className="rounded-2xl bg-[#2D5356] py-4 pl-4 text-white md:pl-6">
        <div className="text-md flex items-center justify-between font-semibold md:text-[1.5rem]">
          <h1>
            <i
              onClick={() => router.back()}
              className="ri-arrow-left-line mr-2 cursor-pointer font-normal md:mr-9"
            ></i>
            Make payment for booking session
          </h1>
        </div>
      </div>

      <div className="mt-7 flex min-h-screen flex-col gap-6 md:flex-row md:p-6">
        {/* Left - Profile Info */}
        <div className="bg-[#E1F0EF] px-3 py-6 md:w-8/14 md:pb-14">
          <div className="bg-light relative rounded-lg px-3 py-6 pb-10">
            <div className="flex w-full items-center gap-6">
              <div className="flex flex-col items-center gap-1 md:ml-4 md:gap-2">
                <img src="../image/sheprofile.svg" alt="sheprofile" />
                <div className="absolute mt-18 ml-18 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-[0.9rem] text-white">
                  <FaCheck />
                </div>
                <p className="text-primary Roboto text-xs font-medium">
                  <i className="ri-star-fill pr-1 text-[1.1rem] text-yellow-400"></i>
                  4.2
                </p>
              </div>
              <div className="-mt-4 leading-5">
                <h2 className="text-hcolor abril text-sm font-bold tracking-wide md:text-[1.6rem]">
                  Olischuk Olga
                </h2>
                <p className="text-[0.9rem] text-blue-700">Mental Health</p>
                <p className="text-primary text-sm">7 Years Experience</p>
                <p className="text-primary text-sm">Hindi/English/Gujarati</p>
                <p className="text-primary text-sm">Trauma, Family Issue</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between bg-[#E1F0EF] px-4 py-5 leading-5 md:pr-8">
              <div>
                <h3 className="text-hcolor mb-2 text-[1rem] font-semibold md:text-[1.3rem]">
                  Appointment Timing
                </h3>
                <p className="text-[0.9rem] text-blue-700 md:text-[1rem]">
                  24 Feb 2023, 02:30 PM
                </p>
              </div>
              <button
                onClick={() => router.back()}
                className="text-primary cursor-pointer"
              >
                Change
              </button>
            </div>

            <div className="mt-4 bg-[#e1f0ef4d] px-4 py-3">
              <h3 className="text-hcolor mb-2 text-[1rem] font-semibold uppercase md:text-[1.3rem]">
                Note:
              </h3>
              <ul className="text-primary list-disc pl-5 text-[0.9rem] md:w-9/12 md:text-[1rem]">
                <li>Appointment changes applicable</li>
                <li className="py-1">
                  Updates will be sent to your email and mobile number
                </li>
                <li className="pb-1">
                  By booking the appointment, you agree to{" "}
                  <span className="text-blue-700"> Terms &Conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right - Time Slot and Button */}
        <div className="w-full bg-[#E1F0EF] pt-5 pb-10 md:w-6/14">
          <div className="rounded-lg p-3">
            <div className="bg-light mt-3 rounded-lg pl-4 pr-8 pt-3 pb-12 text-[0.9rem] md:text-[1rem] text-primary leading-8">
              <h4 className="text-hcolor font-semibold mb-2 text-[1rem] md:text-[1.2rem]">
                Payment Details
              </h4>
              <p className="flex items-center justify-between pl-2">
                <span>Consultation Fee</span> <span className="text-black">₹ 500</span>
              </p>
              <p className="flex items-center justify-between pl-1">
                <span>Peak Charges</span> <span className="text-black">₹ 50</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Booking Fee</span> <span className="text-black">₹ 10</span>
              </p>

              <hr className="bg-[#ffc0cb8c] border-0 h-0.5"></hr>
              <p className="flex items-center justify-between">
                <span>Booking Fee</span> <span className="text-black">₹ 560</span>
              </p>

              <button
                onClick={handleMakePaymentSession}
                className="text-light mt-10 md:mt-14 w-full cursor-pointer rounded-md bg-green-500 px-14 py-2.5 text-[1rem] hover:bg-green-600 md:text-[1.2rem]"
              >
                Share Payment Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakePaymentSession;
