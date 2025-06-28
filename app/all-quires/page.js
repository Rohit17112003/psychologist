import React from "react";
import AllQuires from "@/components/pages/Dashboard/AllQuires";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AllQuires />
    </MainLayout>
  );
};

export default page;
