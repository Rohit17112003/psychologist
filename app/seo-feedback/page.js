import React from "react";
import SeoFeedback from "@/components/pages/Dashboard/SeoFeedback";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <SeoFeedback />
    </MainLayout>
  );
};

export default page;
