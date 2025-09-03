"use client";
import * as React from "react";
import SideBar from "./side/SideBar.jsx";
import DashboardContent from "./content/DashboardContent";

function Dashboard() {
  return (
    <div className="dashboard-container">
      
      <SideBar/>

      <DashboardContent/>

    </div>
  );
}

export default Dashboard;
