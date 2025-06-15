import React from "react";
import EmailInbox from "@/components/pages/Dashboard/EmailInbox";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <EmailInbox />
    </MainLayout>
  );
};

export default page;
