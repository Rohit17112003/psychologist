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

const BookSession = () => {
  const router = useRouter();
  const handlePsychologistSession = () => {
    router.push("/psychologist-session");
  };
  return (
    <div className="w-full px-0 md:px-2">
      {/* Top Section */}
      <div className="rounded-2xl bg-[#2D5356] py-4 pl-4 text-white md:flex-row md:pl-6">
        <div className="text-md flex items-center justify-between font-semibold md:text-[1.5rem]">
          <h1>
            <span>
              <i
                onClick={() => router.back()}
                className="ri-arrow-left-line mr-2 cursor-pointer font-normal md:mr-9"
              ></i>
            </span>
            Select user for booking session
          </h1>
        </div>
      </div>

      <div className="relative mt-10 flex justify-between items-center md:gap-3 gap-5 md:ml-2  md:w-6/12">
        <i className="ri-search-line text-secondary absolute top-1/2 left-4 -translate-y-1/2 text-lg" />
        <input
          type="text"
          placeholder="Search here...."
          className="text-secondary w-full rounded-full border border-gray-300 py-2 pr-4 pl-10 outline-none focus:ring-[#2D5356]"
        />
        <p className="text-secondary text-[1rem] md:text-[1.2rem]">
          <i className="ri-filter-line ml-1 text-[1.2rem] md:text-[1.4rem]"></i>
          Filter
        </p>
      </div>

      <div
        className="mt-12 grid cursor-pointer grid-cols-1 gap-7 gap-x-13 px-0 pb-16 sm:grid-cols-2 md:px-6 lg:grid-cols-3"
        onClick={handlePsychologistSession}
      >
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
            <h2 className="text-primary text-lg font-semibold">{psych.name}</h2>
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

export default BookSession;
