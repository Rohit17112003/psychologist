import React from "react";
import BookSession from "@/components/pages/ConsultationHistory/BookSession";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <BookSession />
    </MainLayout>
  );
};

export default page;
