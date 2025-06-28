"use client";
import { useRouter } from "next/navigation";
import { BsThreeDotsVertical } from "react-icons/bs";

const messages = [
  {
    name: "Shubham Roy",
    email: "abc@gmail.com",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "18-07-2023",
  },
  {
    name: "Shubham Roy",
    email: "abc@gmail.com",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "2025-06-13",
  },
  {
    name: "Shubham Roy",
    email: "abc@gmail.com",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "2025-06-13",
  },
  {
    name: "Shubham Roy",
    email: "abc@gmail.com",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "2025-06-13",
  },
];

const Quires = () => {
  const router = useRouter();
  const handleEmailInbox = () => {
    router.push("/quires-box");
  };
  const handleAllQuires = () => {
    router.push("/all-quires");
  };

  return (
    <div className="mx-auto mt-8 px-0 md:mt-16">
      <div className="overflow-x-auto rounded-lg bg-white">
        <table className="text-primary w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="bg-[#386B67] text-gray-700">
              <th className="abril text-light py-3 pl-6 text-left text-sm tracking-wider md:pl-7 md:text-[1rem]">
                Quires
              </th>
              <th></th>
              <th></th>
              <th>
                <button onClick={handleAllQuires} className="text-light cursor-pointer text-[0.9rem] font-normal">
                  See All
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr
                key={index}
                className="cursor-pointer hover:bg-gray-200"
                onClick={handleEmailInbox}
              >
                <td className="px-1 py-2.5 text-sm font-semibold whitespace-nowrap md:px-1">
                  <div className="text-hcolor flex items-center gap-2">
                    <BsThreeDotsVertical />
                    <i className="ri-checkbox-blank-line"></i>
                    <span className="abril text-[0.8rem]">{msg.name}</span>
                  </div>
                </td>
                <td className="text-light py-2 pl-8 text-sm whitespace-nowrap md:pl-6">
                  <span className="rounded-full bg-[#2D5356AD] px-2 py-0.5">
                    {msg.email}
                  </span>
                </td>
                <td className="py-2 pl-8 text-sm break-words whitespace-normal md:pl-2">
                  {msg.lorem}
                </td>
                <td className="px-4 py-2 text-sm whitespace-nowrap">
                  {msg.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Quires;
