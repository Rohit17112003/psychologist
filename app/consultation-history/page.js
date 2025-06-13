import React from "react";
import ConsultationHistory from "@/components/pages/ConsultationHistory/Index";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <ConsultationHistory />
    </MainLayout>
  );
};

export default page;
