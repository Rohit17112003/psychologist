import React from "react";
import Profile from "@/components/pages/AllPsychologits/Profile";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <Profile />
    </MainLayout>
  );
};

export default page;
