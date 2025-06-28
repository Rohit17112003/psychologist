"use client";

import { useState } from "react";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handlehomePage=()=>{
    router.push("/");
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch overflow-hidden justify-center bg-[#fdf6ec] px-6 py-8">
      {/* Left Side - Mobile Login */}
      <form className="md:w-1/2 w-full flex flex-col items-center text-center space-y-8 md:border-r border-[gray]  ">
        <Image src="/image/wellhopelogo.svg" alt="Logo" width={200} height={200} className="md:mt-10" />
        <h1 className="text-3xl font-bold text-[#294646] leading-tight abril">Welcome to Wellhope</h1>
        <h2 className="md:text-4xl text-xl font-semibold text-[#294646] abril">LOGIN</h2>

        <div className="w-full max-w-sm space-y-3">
          <div className="flex items-center border border-[#D9D9D9] rounded-[8px] px-4 py-3 bg-white">
            <FaPhoneAlt className="text-[#294646] mr-2" />
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="outline-none w-full text-[#294646] placeholder:text-[#aaa] text-[1rem] pr-1.5 pb-0.5"
            />
            <FaCheckCircle className="text-[#294646]" />
          </div>

          <div className="flex items-center border border-[#D9D9D9] rounded-[8px] px-4 py-3 bg-white">
            <IoMdLock className="text-[#294646] text-[1.2rem] mr-2" />
            <input
              type="text"
              placeholder="Otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="outline-none w-full text-[#294646] placeholder:text-[#aaa] text-[1rem] pr-1.5 pb-0.5"
            />
          </div>

          <button onClick={handlehomePage} type="button" className="bg-[#294646] cursor-pointer text-white font-semibold py-2.5 rounded-full w-full md:w-64 mt-4">
            LOGIN
          </button>
        </div>
      </form>

      {/* Right Side - Email Login */}
      <form className="md:w-1/2 w-full mt-10 md:mt-16 flex flex-col  md:pl-14 md:ml-10  relative">
        <div className="w-full md:w-7/13 bg-white p-6 rounded-lg space-y-3 border border-[#D9D9D9]">
          <h2 className="text-xl font-bold text-[#294646] text-center flex justify-center items-center">
            Login<span className="ml-1 text-green-600">✔</span>
          </h2>

          <div className="space-y-1">
            <label htmlFor="email" className="text-[#294646] font-medium text-sm">Email</label>
            <div className="border border-[#D9D9D9] rounded-sm flex items-center px-4">
              <MdOutlineMarkEmailRead className="text-[#294646] mr-2 text-[1.2rem]" />
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none w-full text-[#294646] placeholder:text-[#aaa] text-[1rem] py-1.5 pr-1.5 "
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-[#294646] font-medium text-sm">Password</label>
            <div className="border border-[#D9D9D9] rounded-sm flex items-center px-4">
              <IoMdLock className="text-[#294646] mr-2 text-[1.3rem]"/>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none bg-none w-full text-[#294646] py-1.5 text-[]1rem pr-1.5 "
              />
              <span className="text-sm text-blue-500 ml-2 cursor-pointer">Forgot?</span>
            </div>
          </div>

          <button onClick={handlehomePage} type="button" className="bg-[#294646] text-white font-semibold py-1.5 rounded-full my-5 w-full cursor-pointer">
            Log in
          </button>

          <button className="border border-[#c9b8b8]  text-[#294646] py-1.5 rounded-sm w-full mb-6 cursor-pointer">
            Sign up
          </button>
        </div>

        <div className="absolute right-29 -bottom-5 hidden md:block">
          <Image src="/image/Character.svg" alt="login graphic" width={200} height={200} />
        </div>
      </form>
    </div>
  );
};

export default SignIn;