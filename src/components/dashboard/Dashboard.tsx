
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DefaultDashboard from "./DefaultDashboard";
import BreakDashboard from "./BreakDashboard";

interface DashboardProps {
  currentStatus: string;
  onStatusChange?: (status: string) => void;
}

const Dashboard = ({ currentStatus, onStatusChange }: DashboardProps) => {
  const handleEndBreak = () => {
    if (onStatusChange) {
      onStatusChange("available");
    }
  };

  // Show different content based on the user's status
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      
      {currentStatus === "break" ? (
        <BreakDashboard onEndBreak={handleEndBreak} />
      ) : (
        <DefaultDashboard currentStatus={currentStatus} onStatusChange={onStatusChange} />
      )}
    </div>
  );
};

export default Dashboard;
