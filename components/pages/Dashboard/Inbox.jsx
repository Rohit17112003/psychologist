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

const InboxTable = () => {
  const router = useRouter();
  const handleEmailInbox = () => {
    router.push("/email-inbox");
  };
  return (
    <div className="mx-auto mt-8 px-0 md:mt-16">
      <div className="overflow-x-auto rounded-lg bg-white">
        <table className="text-primary w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="bg-[#386B67] text-gray-700">
              <th className="text-md abril text-light py-3 pl-4 text-left tracking-wider md:pl-9">
                Inbox
                <i className="ri-delete-bin-6-line cursor-pointer pl-8"></i>
                <i className="ri-star-line cursor-pointer px-3"></i>
              </th>
              <th className="px-0 py-3 text-left text-sm font-medium">
                <div className="flex items-center gap-2">
                  <button className="bg-light cursor-pointer rounded-sm px-6 py-0.5">
                    All
                  </button>
                  <button className="bg-light cursor-pointer rounded-sm px-6 py-0.5">
                    Read
                  </button>
                </div>
              </th>
              <th className="py-3 pl-2 text-left text-sm font-medium md:pl-0">
                <button className="bg-light cursor-pointer rounded-sm px-4 py-0.5">
                  Unread
                </button>
              </th>
              <th className="cursor-pointer py-3 text-left text-sm font-medium">
                <button className="text-light"> All View</button>
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
                <td className="px-4 py-2 text-sm font-semibold whitespace-nowrap md:px-6">
                  <div className="text-hcolor flex items-center gap-2">
                    <BsThreeDotsVertical />
                    <i className="ri-checkbox-blank-line"></i>
                    <span className="abril text-[0.8rem]">{msg.name}</span>
                  </div>
                </td>
                <td className="text-light px-4 py-2 text-sm whitespace-nowrap md:px-0">
                  <span className="rounded-full bg-[#2D5356AD] px-2 py-0.5">
                    {msg.email}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm break-words whitespace-normal md:px-0">
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

export default InboxTable;
