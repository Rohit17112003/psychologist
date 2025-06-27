import React from "react";

const transactions = [
  {
    orderId: "HDYE7484",
    date: "04 Sep 2019",
    credited: "--------",
    debited: "500 INR",
    status: "Pending",
    settelment:"Settlement"
  },
  {
    orderId: "HDYE7484",
    date: "28 May 2019",
    credited: "500 INR",
    debited: "--------",
    status: "Completed",
    settelment:""
  },
  {
    orderId: "HDYE7484",
    date: "23 Nov 2019",
    credited: "--------",
    debited: "500 INR",
    status: "Pending",
    settelment:"Settlement"
  },
    {
    orderId: "HDYE7484",
    date: "05 Feb 2019",
    credited: "--------",
    debited: "500 INR",
    status: "Pending",
    settelment:"Settlement"
  },
];

const Psychologist = () => {
  return (
    <>
      <div className="rounded-2xl bg-[#2D5356] md:py-5 py-3 md:pl-10 pl-5 text-white md:flex-row">
        <h1 className="text-md font-semibold md:text-[1.5rem]">
          Payment Management
        </h1>
      </div>

      <div className="mt-10 rounded-xl border border-[#D5D5D5] bg-white pt-1">
        {/* Search Bar and Filter */}
        <div className="flex items-center justify-between px-4 py-8 md:px-8">
          <div className="relative w-9/12 md:w-5/12">
            <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-lg text-gray-500" />
            <input
              type="text"
              placeholder="Search here using Order ID...."
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
                <th className="rounded-tl-md px-8 py-4">Order ID</th>
                <th className="px-8 py-4">Transaction Date</th>
                <th className="px-8 py-4">Credited</th>
                <th className="px-8 py-4">Debited</th>
                <th className="rounded-tr-md px-8 py-4">Status</th>
                <th className="rounded-tr-md px-8 py-4">Settlement</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <tr
                  key={i}
                  className="text-primary border-b border-[#D5D5D5] font-medium"
                >
                  <td className="p-8">{t.orderId}</td>
                  <td className="p-8">{t.date}</td>
                  <td className="p-8">{t.credited}</td>
                  <td className="p-8">{t.debited}</td>
                  <td className="p-8">
                    <span className={`flex justify-center rounded-md px-4 py-0.5 md:w-24 ${["", "bg-blue-100", "", ""][i] || "bg-pink-100"} ${["", "text-[#00B69B]", "", ""][i] || "text-[#F13E3E]"}`}>
                      {t.status}
                    </span>
                  </td>
                   <td className={`p-8  ${i === 1 ? "hidden" : "block"}`}>
    <span className={`inline-block rounded-md bg-hcolor px-4 py-0.5 text-light`}>
  {t.settelment}
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

export default Psychologist;
