import React from "react";
import AdminTable from "@/components/pages/Dashboard/AdminTable";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AdminTable />
    </MainLayout>
  );
};

export default page;
