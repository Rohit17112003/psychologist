import React from "react";
import AllUsers from "@/components/pages/AllUsers/Index";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AllUsers />
    </MainLayout>
  );
};

export default page;
