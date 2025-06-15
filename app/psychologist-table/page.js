import React from "react";
import PsychologistTable from "@/components/pages/Dashboard/PsychologistTable";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <PsychologistTable />
    </MainLayout>
  );
};

export default page;
