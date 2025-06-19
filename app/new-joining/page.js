import React from "react";
import NewJoining from "@/components/pages/AllPsychologits/NewJoining";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <NewJoining />
    </MainLayout>
  );
};

export default page;
