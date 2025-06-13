import PaymentManagement from "@/components/pages/PaymentManagement";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <PaymentManagement />
    </MainLayout>
  );
};

export default page;
