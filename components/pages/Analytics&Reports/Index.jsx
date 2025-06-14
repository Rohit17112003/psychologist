import React from "react";
import StatContainer from "@/components/molecules/StatContainer";
import data from "@/public/database/nav.json";
import InboxDiv from "../Dashboard/InboxDiv";

const AnalyticcsPeports = () => {
    const { stats } = data;
  return (
    <>
     <div className=" rounded-2xl bg-[#2D5356] md:mb-14 mb-10 py-5 md:pl-10 pl-5 text-white md:flex-row">
        <h1 className="text-xl font-semibold md:text-2xl">Analytics & Reports</h1>
      </div>
    <section className="grid gap-5 lg:grid-cols-4 px-0 md:px-6 pb-5">
        {stats.map((stat, index) => (
          <StatContainer key={index} index={index} {...stat} />
        ))}
      </section>
      <InboxDiv/>
    </>
  );
};

export default AnalyticcsPeports;
