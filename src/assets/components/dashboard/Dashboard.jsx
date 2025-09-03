"use client";
import * as React from "react";
import SideBar from "./side/SideBar.jsx";
import DashboardContent from "./content/DashboardContent";

function Dashboard() {
  return (
    //<div className="dashboard-container">
    <div className="grid grid-cols-[1fr_auto] bg-[#F9F9F9] font-['Inter']">
      <SideBar/>

      <DashboardContent/>

    </div>
  );
}

export default Dashboard;
