
"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const reviews = [
  {
    name: "Subham Roy",
    date: "4/8/23",
    image: "/image/Ellipse 1.svg",
    message:
      "Ramesh provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor. Ramesh provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor.",
  },
  {
    name: "Subham Roy",
    date: "4/8/23",
    image: "/image/Ellipse 1.svg",
    message:
      "Ramesh provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor. Ramesh provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor.",
  },
  {
    name: "Subham Roy",
    date: "4/8/23",
    image: "/image/Ellipse 1.svg",
    message:
      "Ramesh provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor. Ramesh provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor.",
  },
  {
    name: "Subham Roy",
    date: "4/8/23",
    image: "/image/Ellipse 1.svg",
    message:
      "Ramesh provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor. Ramesh provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor.",
  },
];

const SeoFeedback = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <>
       <div className="rounded-2xl bg-[#2D5356] py-4 pl-4 text-white md:flex-row md:pl-6">
        <h1 className="text-md font-semibold md:text-[1.5rem]">
          <span>
            <i
              onClick={() => router.back()}
              className="ri-arrow-left-line mr-2 cursor-pointer font-normal md:mr-9"
            ></i>
          </span>
        SEO Office Feedback
        </h1>
      </div>

      <div className="p-4 md:p-10 bg-[#FDF8EF] min-h-screen">
        <div className="relative w-full md:w-1/2 mb-6">
          <input
            type="text"
            placeholder="Search here client ID...."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg"></i>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 flex flex-col gap-1 items-start"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={35}
                  height={35}
                  className="rounded-full object-cover"
                />
                <div className="font-semibold text-hcolor abril text-[0.9rem] md:text-[1rem]">{review.name}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm mb-1">
                  <div className="flex text-green-400 text-base">
                    <i className="ri-star-fill mr-0.5"></i>
                    <i className="ri-star-fill mr-0.5"></i>
                    <i className="ri-star-fill mr-0.5"></i>
                    <i className="ri-star-fill mr-0.5"></i>
                    <i className="ri-star-fill text-pink-200"></i>
                  </div>
                  <span className="text-gray-600">{review.date}</span>
                </div>
                <p className="text-sm text-gray-700">{review.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SeoFeedback;

