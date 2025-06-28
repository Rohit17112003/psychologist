import React from "react";
import PatientReviews from "@/components/pages/Dashboard/PatientReviews";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <PatientReviews />
    </MainLayout>
  );
};

export default page;
