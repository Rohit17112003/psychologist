"use client";

import { useState } from "react";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import Image from "next/image";

const SignIn = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#fdf6eca1] p-4">
      {/* Left Side - Mobile Login */}
      <div className="md:w-1/2 w-full flex flex-col items-center text-center space-y-6">
        <Image src="/image/wellhopelogo.svg" alt="Logo" width={200} height={200} />
        <h1 className="text-3xl font-bold text-[#294646]">Welcome to Wellhope</h1>
        <h2 className="text-2xl font-semibold text-[#294646]">LOGIN</h2>

        <div className="w-full max-w-sm space-y-4">
          <div className="flex items-center border rounded-lg px-4 py-2 bg-white">
            <FaPhoneAlt className="text-[#294646] mr-2" />
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="outline-none w-full"
            />
            <FaCheckCircle className="text-[#294646]" />
          </div>

          <div className="flex items-center border rounded-lg px-4 py-2 bg-white">
            <IoMdLock className="text-[#294646] mr-2" />
            <input
              type="text"
              placeholder="Otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="outline-none w-full"
            />
          </div>

          <button className="bg-[#294646] text-white font-semibold py-2 rounded-full w-full shadow-md">
            LOGIN
          </button>
        </div>
      </div>

      {/* Right Side - Email Login */}
      <div className="md:w-1/2 w-full mt-10 md:mt-0 flex flex-col items-center">
        <div className="w-full max-w-sm bg-white shadow-md p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-bold text-[#294646] text-center flex justify-center items-center">
            Login<span className="ml-1 text-green-600">✔</span>
          </h2>

          <div className="border rounded-lg flex items-center px-4 py-2">
            <MdOutlineMarkEmailRead className="text-[#294646] mr-2" />
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none w-full"
            />
          </div>

          <div className="border rounded-lg flex items-center px-4 py-2">
            <IoMdLock className="text-[#294646] mr-2" />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none w-full"
            />
            <span className="text-sm text-blue-500 ml-2 cursor-pointer">Forgot?</span>
          </div>

          <button className="bg-[#294646] text-white font-semibold py-2 rounded-md w-full shadow-md">
            Log in
          </button>

          <button className="border border-[#294646] text-[#294646] py-2 rounded-md w-full">
            Sign up
          </button>
        </div>

        <div className="mt-6">
          <Image src="/image/Character.svg" alt="login graphic" width={150} height={150} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
