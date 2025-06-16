import React from "react";
import PsychologistSession from "@/components/pages/ConsultationHistory/PsychologistSession";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <PsychologistSession />
    </MainLayout>
  );
};

export default page;
