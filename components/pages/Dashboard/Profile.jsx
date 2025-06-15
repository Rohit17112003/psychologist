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
        <div className="flex items-center justify-between text-xl font-semibold md:text-[1.5rem]">
          <h1>
            <span>
              <i
                onClick={() => router.back()}
                className="ri-arrow-left-line mr-2 cursor-pointer font-normal md:mr-9"
              ></i>
            </span>
            Psychologist/Counselor Details
          </h1>
          <div className="md:flex hidden items-center gap-2 px-10">
            <button className="text-light flex cursor-pointer items-center gap-2 rounded-md bg-red-500 px-5 py-2 text-[0.9rem] hover:bg-red-600 md:text-[1.3rem]">
              Delete <MdDelete />
            </button>
            <button className="text-light flex cursor-pointer items-center gap-2 rounded-md bg-green-500 px-5 py-2 text-[0.9rem] hover:bg-green-600 md:text-[1.3rem]">
              Edit <MdEdit />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between md:pl-14 pl-4 pr-6">
        <div className="md:flex hidden items-center gap-10">
          <img src="/image/user.svg" alt="user" className="mt-7 h-28 w-28" />
          <h1 className="text-secondary rounded-md bg-[#E1F0EF] px-4 py-3 text-[1.2rem] md:text-[1.6rem] mt-7">
            Wallet Amount - 10,000.00
          </h1>
        </div>
        <button className="text-light rounded-md bg-[#F13E3E] px-4 py-2 text-[1rem] md:text-[1.3rem] mt-7">
          Block User
        </button>
      </div>
      <div className="mt-5 mb-20 flex flex-col items-center rounded-lg  md:mt-7">
        <div className="mt-5 grid md:grid-cols-2  gap-3 px-6">
          <form className="flex  flex-col gap-3 text-[var(--color-text)]">
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-group-fill text-2xl text-[#0077B6]"></i>
              <input
                type="text"
                defaultValue="Ankush Kumar"
                className="w-full outline-0"
                required
              />
            </div>
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-mail-unread-fill text-2xl text-[#0077B6]"></i>
              <input
                type="email"
                defaultValue="Nitesh26374@gmail.com"
                className="w-full outline-0"
                required
              />
            </div>
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-phone-fill text-2xl text-[#0077B6]"></i>
              <input
                type="text"
                defaultValue="+917364474483"
                className="w-full outline-0"
                required
              />
            </div>
            <div className="flex gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-2 ring ring-[#d1d5db58] md:pr-14">
              <i className="ri-map-pin-2-fill text-2xl text-[#0077B6]"></i>
              <p>
                Garden View Apt, Chandawarkar Road, Behind Of Saraswat Co Op
                Bank, Borivli (w)
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <i className="ri-shield-check-fill text-2xl text-[#0077B6]"></i>
              <input
                type="text"
                defaultValue="Verified"
                className="w-full outline-0"
                required
              />
            </div>
          </form>

          <form className="mt-5 flex  flex-col items-center gap-3 md:mt-0 ">
            <img
              src="/image/qrcode.svg"
              alt="qrcode"
              className="h-56 w-56 md:h-38 md:w-40"
            />
            <label className="w-[300px] text-[1.1rem] text-[var(--color-text)] md:-ml-24.5">
              Referral Link
            </label>
            <div className="-mt-2 flex w-full items-center justify-between gap-4 rounded-md border-1 border-[#D1D5DB] ring ring-[#d1d5db58]">
              <input
                ref={inputRef}
                type="text"
                defaultValue="https://www.trade.com/NSnX4qW"
                className="w-[290px] px-3 py-1.5 outline-0"
                required
              />
              <span
                className="relative h-full cursor-pointer rounded-r-md bg-[var(--color-primary)] px-2.5 py-1.5 text-2xl text-[var(--color-copy)]"
                onClick={handleCopy}
              >
                <i className="ri-file-copy-fill"></i>
                {copied && (
                  <p className="absolute mt-1 -ml-2 text-[0.8rem] text-pink-400">
                    Copied
                  </p>
                )}
              </span>
            </div>

            <div className="flex w-full items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-2 ring ring-[#d1d5db58]">
              <img
                src="/image/Frame (1).svg"
                alt="icon"
                className="h-7.5 w-7.5"
              />
              <input
                type="text"
                defaultValue="IB"
                className="w-full outline-0"
                required
              />
            </div>
          </form>
        </div>

        <form>
          <button
            type="submit"
            className="mt-7 mb-7 cursor-pointer rounded-lg bg-[var(--color-primary)] px-20 py-2 text-[1.2rem] text-white"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
