import React from "react";
import StatContainerAR from "@/components/molecules/StatContainerAR";
import data from "@/public/database/nav.json";
import InboxDiv from "../Dashboard/InboxDiv";

const AnalyticcsPeports = () => {
    const { stats } = data;
  return (
    <>
     <div className=" rounded-2xl bg-[#2D5356] md:mb-14 mb-10 md:py-5 py-3 md:pl-10 pl-5 text-white md:flex-row">
        <h1 className="text-md font-semibold md:text-[1.5rem]">Analytics & Reports</h1>
      </div>
    <section className="grid gap-5 lg:grid-cols-4 px-0 md:px-6 pb-5">
        {stats.map((stat, index) => (
          <StatContainerAR key={index} index={index} {...stat} />
        ))}
      </section>
      <InboxDiv/>
    </>
  );
};

export default AnalyticcsPeports;
