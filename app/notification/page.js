import React from "react";
import Notification from "@/components/pages/Dashboard/Notification";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <Notification />
    </MainLayout>
  );
};

export default page;
