import React from "react";
import CompanyTable from "@/components/pages/Dashboard/CompanyTable";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <CompanyTable />
    </MainLayout>
  );
};

export default page;
