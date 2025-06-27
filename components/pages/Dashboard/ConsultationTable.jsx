

"use client"
 import { useRouter } from "next/navigation";

const transactions = [
  {
    orderId: "HDYE7484",
    user:"Rohit",
    psycho: "Hemant",
    consul: "chat",
    date: "04 Set 2019",
    status: "Pending",
  },
  {
    orderId: "HDYE7484",
    user:"Rohit",
    psycho: "Hemant",
    consul: "video",
    date: "28 May 2019",
    status: "Completed",
  },
  {
    orderId: "HDYE7484",
    user:"Rohit",
    psycho: "Hemant",
    consul: "video",
    date: "23 Nov 2019",
    status: "Pending",
  },
  {
    orderId: "HDYE7484",
    user:"Rohit",
    psycho: "Hemant",
    consul: "video",
    date: "05 Feb 2019",
    status: "Completed",
  },
];

const ConsultationTable = () => {
const router = useRouter();
  
  return (
    <>
      <div className="rounded-2xl bg-[#2D5356] py-4  md:pl-6 pl-4 text-white md:flex-row">
        <h1 className="text-md font-semibold md:text-[1.5rem]">
         <span><i onClick={() => router.back()} className="ri-arrow-left-line md:mr-9 mr-2 cursor-pointer font-normal"></i></span> Total No. of Consultation
        </h1>
      </div>

      <div className="mt-10 rounded-xl border border-[#D5D5D5] bg-white pt-1">
        {/* Search Bar and Filter */}
        <div className="flex items-center justify-between px-4 py-8 md:px-8">
          <div className="relative w-2/3 md:w-2/5">
            <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-lg text-gray-500" />
            <input
              type="text"
              placeholder="Search here using order ID...."
              className="w-full rounded-full border border-gray-300 py-2 pr-4 pl-10 outline-none focus:ring-[#2D5356]"
            />
          </div>
          <span className="text-primary text-base md:text-lg">
            <i className="ri-filter-line mr-1 text-xl md:text-2xl"></i>Filter
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="bg-tertiary text-hcolor text-base font-bold md:text-lg">
                <th className="rounded-tl-md rounded-bl-md px-6 py-3">Order ID</th>
                <th className="px-6 py-3 text-black">User</th>
                <th className="px-6 py-3 text-black">Pschologist</th>
                <th className="px-6 py-3 text-black">Consultation Type</th>
                <th className="px-6 py-3">Date</th>
                <th className="rounded-tr-md rounded-br-md px-6 py-3">Status</th>
              </tr>
            </thead>
<tbody>
  {transactions.map((t, i) => (
    <tr key={i} className="border-b-2 border-[#d5d5d552] font-medium">
      <td className="px-6 py-6 text-hcolor font-medium">{t.orderId}</td>
      <td className="px-6 py-6 text-black">{t.user}</td>
      <td className="px-6 py-6 text-black">{t.psycho}</td>
      <td className="px-6 py-6 text-black">{t.consul}</td>
      <td className="md:px-6 py-6 text-hcolor font-medium">{t.date}</td>
      <td className="px-6 py-6">
        <span
          className={`inline-block rounded-md px-4 py-0.5 ${
            t.status === "Completed"
              ? "bg-green-100 text-[#00B69B]"
              : "bg-green-100 px-6 text-red-500"
          }`}
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

export default ConsultationTable;

