"use client";
import { useRouter } from "next/navigation";

const transactions = [
  {
    orderId: "HDYE7484",
    datetime: "04 Sep 2019 02:00 pm",
    user: "Rohit",
    psychologist: "Vedant",
    amount: "500 INR",
    type: "Audio",
    status: "Booked",
  },
  {
    orderId: "HDYE7484",
    datetime: "28 May 2019 02:00 pm",
    user: "Rohit",
    psychologist: "Vedant",
    amount: "500 INR",
    type: "Video",
    status: "Ongoing",
  },
  {
    orderId: "HDYE7484",
    datetime: "23 Nov 2019 02:00 pm",
    user: "Rohit",
    psychologist: "Vedant",
    amount: "500 INR",
    type: "Video",
    status: "Rejected",
  },
  {
    orderId: "HDYE7484",
    datetime: "05 Feb 2019 02:00 pm",
    user: "Rohit",
    psychologist: "Vedant",
    amount: "500 INR",
    type: "Video",
    status: "Upcoming",
  },
];

const ConsultationHistory = () => {
  const router = useRouter();
  const handleBookSession = () => {
    router.push("/book-session");
  };
  return (
    <>
      <div className="rounded-2xl bg-[#2D5356] md:py-5 py-3 pl-5 text-white md:flex-row md:pl-10">
        <h1 className="text-md font-semibold md:text-[1.5rem]">
          Consultation History
        </h1>
      </div>

      <div className="mt-10 rounded-xl border border-[#D5D5D5] bg-white pt-1">
        {/* Search Bar and Filter */}
        <div className="flex items-center justify-between px-4 py-8 md:px-8">
          <div className="relative w-6/12 md:w-2/5">
            <i className="ri-search-line absolute top-1/2 md:left-4 left-3 -translate-y-1/2 text-lg text-gray-500" />
            <input
              type="text"
              placeholder="Search By Order ID...."
              className="w-full rounded-full border border-gray-300 py-2 pr-4 md:pl-10 pl-8 outline-none focus:ring-[#2D5356]"
            />
          </div>
          <div className="flex items-center gap-1.5 md:gap-3">
            <button onClick={handleBookSession} className="text-light cursor-pointer rounded-md bg-green-500 px-2 py-2 text-[0.9rem] md:px-5 md:text-[1.1rem]">
              Book Session
            </button>
            <span className="text-primary text-base md:text-lg">
              <i className="ri-filter-line mr-1 text-xl md:text-2xl"></i>Filter
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="bg-tertiary text-secondary text-base font-bold md:text-lg">
                <th className="rounded-tl-md px-8 py-4">Order ID</th>
                <th className="px-8 py-4">User</th>
                <th className="px-8 py-4">Psychologist</th>
                <th className="px-8 py-4">Type</th>
                <th className="rounded-tr-md md:px-9 px-0 py-4">Date/Time</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <tr
                  key={i}
                  className="text-primary border-b border-[#D5D5D5] font-medium"
                >
                  <td className="p-8">{t.orderId}</td>
                  <td className="p-8">{t.user}</td>
                  <td className="p-8">{t.psychologist}</td>
                  <td className="p-8">{t.type}</td>
                  <td className="p-8 md:px-9 px-0">{t.datetime}</td>
                  <td className="p-8">{t.amount}</td>
                  <td className="p-8">
                    <span
                      className={`flex justify-center rounded-md px-4 py-0.5 md:w-24 ${["bg-green-100", "bg-yellow-100", "bg-red-100", "bg-blue-100"][i] || "bg-gray-100"} ${["text-[#00B69B]", "text-[#FFB020]", "text-[#F04438]", "text-[#2874e7]"][i] || "text-gray-500"}`}
                    >
                      {t.status}
                    </span>
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

export default ConsultationHistory;
