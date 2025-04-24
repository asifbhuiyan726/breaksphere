
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import Dashboard from "@/components/dashboard/Dashboard";

const Index = () => {
  const [userStatus, setUserStatus] = useState("available");

  const handleStatusChange = (status: string) => {
    setUserStatus(status);
  };

  return (
    <MainLayout onStatusChange={handleStatusChange}>
      <Dashboard currentStatus={userStatus} onStatusChange={handleStatusChange} />
    </MainLayout>
  );
};

export default Index;
