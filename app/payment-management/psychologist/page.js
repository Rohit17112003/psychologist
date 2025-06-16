import React from "react";
import Psychologist from "@/components/pages/PaymentManagement/Psychologist";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <Psychologist />
    </MainLayout>
  );
};

export default page;
