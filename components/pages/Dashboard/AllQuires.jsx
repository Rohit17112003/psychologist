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

const AllQuires = () => {
  const router = useRouter();

  const handleEmailInbox = () => {
    router.push("/quires-box");
  };

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
          Quires
        </h1>
      </div>

    <div className="mx-auto mt-8 px-0 md:mt-8">
      <div className="overflow-x-auto rounded-lg bg-white">
        <table className="w-full min-w-[700px] border-collapse text-primary">
          <tbody>
            {messages.map((msg, index) => (
              <tr
                key={index}
                className="cursor-pointer hover:bg-gray-200"
                onClick={handleEmailInbox}
              >
                <td className="whitespace-nowrap px-1 py-2.5 text-sm font-semibold md:px-1">
                  <div className="flex items-center gap-2 text-hcolor">
                    <BsThreeDotsVertical />
                    <i className="ri-checkbox-blank-line"></i>
                    <span className="abril text-[0.8rem]">{msg.name}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap py-2 pl-8 text-sm text-light md:pl-6">
                  <span className="rounded-full bg-[#2D5356AD] px-2 py-0.5">
                    {msg.email}
                  </span>
                </td>
                <td className="break-words whitespace-normal py-2 pl-8 text-sm md:pl-2">
                  {msg.lorem}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-sm">
                  {msg.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
</>
  );
};

export default AllQuires;
