import React from "react";
import UserProfile from "@/components/pages/AllUsers/UserProfile";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <UserProfile />
    </MainLayout>
  );
};

export default page;
