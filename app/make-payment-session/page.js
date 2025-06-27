import React from "react";
import MakePaymentSession from "@/components/pages/ConsultationHistory/MakePaymentSession";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <MakePaymentSession />
    </MainLayout>
  );
};

export default page;
