import { SignOut } from "@/components/auth/signout";
import DashboardCards from "@/components/feature/dashboard-cards";
import React from "react";

export default function Dashboard() {
  return (
    <div className="h-screen px-8">
      <DashboardCards />
    </div>
  );
}
