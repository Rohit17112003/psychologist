import React from "react";
import ConsultationTable from "@/components/pages/Dashboard/ConsultationTable";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <ConsultationTable />
    </MainLayout>
  );
};

export default page;
