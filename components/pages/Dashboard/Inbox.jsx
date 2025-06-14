import React from "react";
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

const InboxTable = () => {
  return (
    <div className="mx-auto mt-8 md:mt-16 px-0">
      <div className="overflow-x-auto bg-white rounded-lg">
        <table className="min-w-[700px] w-full border-collapse text-primary">
          <thead>
            <tr className="bg-[#386B67] text-gray-700">
              <th className="md:pl-9 pl-4 py-3 text-left text-md font-semibold text-light">
                Inbox
                <i className="ri-delete-bin-6-line pl-8 cursor-pointer"></i>
                <i className="ri-star-line px-3 cursor-pointer"></i>
              </th>
              <th className="px-0 py-3 text-left text-sm font-medium">
                <div className="flex items-center gap-2">
                  <button className="bg-light rounded-sm px-6 py-0.5 cursor-pointer">All</button>
                  <button className="bg-light rounded-sm px-6 py-0.5 cursor-pointer">Read</button>
                </div>
              </th>
              <th className="py-3 pl-2 md:pl-0 text-left text-sm font-medium">
                <button className="bg-light rounded-sm px-4 py-0.5 cursor-pointer">Unread</button>
              </th>
              <th className="py-3 text-left text-sm font-medium  cursor-pointer">
               <button className="text-light"> All View</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr key={index} className="hover:bg-gray-200">
                <td className="px-4 md:px-6 py-2 text-sm font-semibold whitespace-nowrap">
                  <div className="flex items-center gap-2 text-hcolor">
                    <BsThreeDotsVertical />
                    <i className="ri-checkbox-blank-line"></i>
                    <span>{msg.name}</span>
                  </div>
                </td>
                <td className="text-light py-2 text-sm whitespace-nowrap px-4 md:px-0">
                  <span className="rounded-full bg-[#2D5356AD] px-2 py-0.5">
                    {msg.email}
                  </span>
                </td>
                <td className="py-2 text-sm px-4 md:px-0 whitespace-normal break-words">
                  {msg.lorem}
                </td>
                <td className="py-2 text-sm whitespace-nowrap px-4 md:px-0">
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

export default InboxTable;
