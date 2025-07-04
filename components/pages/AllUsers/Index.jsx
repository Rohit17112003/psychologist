"use client";
import { useRouter } from "next/navigation";

const psychologists = [
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
  {
    name: "Vedant Tidke",
    role: "+91 5654434565",
    experience: "vedant4665@gmail.com",
    image: "../image/vedant.svg",
  },
];

const AllUsers = () => {
  const router = useRouter();
  const handleUserProfile = () => {
    router.push("/user-profile");
  };
  return (
    <div className="w-full px-0 md:px-2">
      {/* Top Section */}
      <div className="gap-6 rounded-2xl bg-[#2D5356] md:py-5 py-3 pl-5 text-white md:flex-row md:pl-10">
        <h1 className="text-md font-semibold md:text-[1.5rem]">Add Users</h1>
      </div>

       <div className="relative mt-6 w-full px-0 md:w-2/5 md:px-4">
        <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 transform text-lg text-gray-500 md:left-8" />
        <input
          type="text"
          placeholder="Search here using Client ID...."
          className="w-full rounded-full border border-gray-300 py-2 pr-4 pl-10 outline-none focus:ring-[#2D5356]"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-7 gap-x-13 px-0 sm:grid-cols-2 md:px-6 lg:grid-cols-3 cursor-pointer pb-16" onClick={handleUserProfile}>
        {psychologists.map((psych, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-xl bg-white p-1.5 text-center shadow-sm shadow-gray-300"
          >
            <img
              src={psych.image}
              alt={psych.name}
              className="h-24 w-24 rounded-full object-cover p-2.5"
            />
            <h2 className="text-primary md:text-lg text-sm font-semibold">{psych.name}</h2>
            <p className="text-sm text-gray-600">{psych.role}</p>
            <p className="text-sm text-gray-500">{psych.experience}</p>
            <button className="mt-2 font-medium text-blue-400 hover:underline">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
