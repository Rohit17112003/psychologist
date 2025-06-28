import React from "react";
import QuiresBox from "@/components/pages/Dashboard/QuiresBox";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <QuiresBox />
    </MainLayout>
  );
};

export default page;
