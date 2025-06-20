"use client";
import { useRouter } from "next/navigation";
const Notification = () => {
  const data = [
    {
      img: "../image/Ellipse 5.svg",
      desc: "Ramesh provided excellent care and attention during my visits. I felt confiden",
    },
    {
      img: "../image/Ellipse 5.svg",
      desc: "Ramesh provided excellent care and attention during my visits. I felt confiden",
    },  {
      img: "../image/Ellipse 5.svg",
      desc: "Ramesh provided excellent care and attention during my visits. I felt confiden",
    },  {
      img: "../image/Ellipse 5.svg",
      desc: "Ramesh provided excellent care and attention during my visits. I felt confiden",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="rounded-2xl bg-[#2D5356] py-4 pl-4 text-white md:flex-row md:pl-6">
        <h1 className="text-md font-semibold md:text-[1.5rem]">
          <span>
            <i
              onClick={() => router.back()}
              className="ri-arrow-left-line mr-2 cursor-pointer font-normal md:mr-9"
            ></i>
          </span>{" "}
          Notification
        </h1>
      </div>
      {data.map((items, index) => (
        <div key={index} className="flex items-center gap-3 rounded-lg md:py-3 py-1.5 text-[#2D5356D6] bg-white border border-[#00000014] mt-4 px-4">
          <img src={items.img} alt="profile" className="rounded-full h-9" />
          <p className="text-[0.9rem] md:text-[1.25rem]">{items.desc}</p>
        </div>
      ))}
    </>
  );
};

export default Notification;
