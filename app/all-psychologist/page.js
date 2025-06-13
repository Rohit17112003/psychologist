import React from "react";
import AllPsychologits from "@/components/pages/AllPsychologits/Index";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <div>
      <MainLayout pageTitle={"Hi Rohit 👋"}>
        <AllPsychologits />
      </MainLayout>
    </div>
  );
};

export default page;
