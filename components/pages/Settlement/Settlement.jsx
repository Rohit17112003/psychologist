"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";

const Settlement = () => {
  const router = useRouter();
  const handleSettlement = () => {
    router.push("/settlement");
  };

  const [showPopup, setShowPopup] = useState(false);

  const data = [
    {
      name: "Admin (Reminder)",
      number: "1234567890",
      timeAgo: "1 mins ago",
      message: "You have a session in 2 hours"
    },
    {
      name: "Admin (Reminder)",
      number: "1234567890",
      timeAgo: "2 days ago",
      message: "2 days left for your upcoming session. You have a session in 2 hours"
    },
    {
      name: "Better Surgical Care Starts Here!",
      number: "1234567890",
      timeAgo: "1 mins ago",
      message: "Talk to an experienced surgeon today. You have a session in 2 hours"
    },
    {
      name: "Better Surgical Care Starts Here!",
      number: "1234567890",
      timeAgo: "1 mins ago",
      message: "Talk to an experienced surgeon today. You have a session in 2 hours" 
    },
  ];

  const fields = [
    { label: "User Name", type:"text" ,placeholder:"Nikhita Thakre"},
    { label: "Transaction ID" ,type:"text",placeholder:"ERTY_234567" },
    { label: "Settlement Amount", type: "text",placeholder:"5,000" },
  ];

  return (
    <>
      <div className="rounded-2xl bg-[#2D5356] py-4 pl-4 text-white md:pl-6">
        <div className="text-md flex items-center justify-between font-semibold md:text-[1.5rem]">
          <h1>
            <i
              onClick={handleSettlement}
              className="ri-arrow-left-line mr-2 cursor-pointer font-normal md:mr-9"
            ></i>
            Settlement
          </h1>
        </div>
      </div>

      <div className="bg-[#fefcf6] min-h-screen px-4 pt-1 mt-5">
        {/* Search and Filter Buttons */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
            <input
              type="text"
              placeholder="Search Using Name/Number...."
              className="w-full rounded-full border border-gray-300 pl-10 pr-4 py-2"
            />
          </div>

          <div className="flex md:gap-2 gap-2 justify-center items-center">
            <button className="rounded-full border border-gray-300 px-4 py-1 text-sm">
              All
            </button>
            <button className="rounded-full bg-[#2d5356] text-white px-4 py-1 text-sm">
              Settled Amount
            </button>
            <button className="rounded-full border border-gray-300 px-4 py-1 text-sm">
              Non Settled Amount
            </button>
          </div>
        </div>

        {/* List Section */}
        <div className="mt-8">
          <p className="text-lg font-semibold mb-4">Today</p>

          <div className="w-full overflow-x-auto">
            <div className="space-y-4 min-w-[768px]">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-gray-200 pb-4"
                >
                  <div className="flex gap-2 w-full md:w-auto">
                    <div className="flex gap-4 items-center text-sm text-gray-400 w-24 pt-2 min-w-fit">
                      {item.timeAgo}
                      <span className="text-black text-lg">|</span>
                    </div>
                    <img
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col pl-3">
                      <p className="font-medium text-[1rem]">
                        {item.name} | <span className="text-gray-600">{item.number}</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{item.message}</p>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-0">
                    <button
                      onClick={() => setShowPopup(true)}
                      className="bg-[#cde3de] text-sm px-4 py-1 outline-0 rounded-md font-medium cursor-pointer"
                    >
                      Settlement
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008c]">
          <div className="scrollbar-hidden relative max-h-screen w-full overflow-y-auto border border-gray-200 bg-white p-0 pt-6 md:pt-6 md:w-4/14 md:rounded-lg">
         <div className="flex justify-between items-center px-4">
           <h1 className="text-hcolor font-semibold text-[1rem] md:text-[1.2rem]">Settlement Details</h1>
            <button
              className=" cursor-pointer rounded-full bg-[#00000023] p-1.5 text-xl text-black hover:bg-[#00000034]"
              onClick={() => setShowPopup(false)}
            >
              <IoMdClose />
            </button>
         </div>

            <form className="py-6 px-4">
            <h1 className="text-hcolor bg-[#00000021] px-4 py-2.5 rounded-md text-[1rem] md:text-[1.2rem] fonst font-semibold">Wallet Amount - 10,000.00</h1>
              <div className=" gap-y-4  mt-4">
                {fields.map(({ label, type = "text", placeholder, options = [] }, idx) => (
                  <div key={idx} className="col-span-1 pb-3">
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
                        className="w-full rounded border border-gray-300 px-3.5 py-2 text-[#2D5356D6] outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>

                <button
                  type="button"
                  className="mt-8 w-full cursor-pointer rounded-md bg-[#2D5356] py-2.5 font-semibold text-white transition hover:bg-[#244747]"
                >
                  Settlement
                </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Settlement;