"use client";
import * as React from "react";
import SideBar from "./SideBar/SideBar";
import DashboardContent from "./MainContent/DashboardContent";

function Dashboard() {
  return (
    <div className="dashboard-container">
      
      <SideBar/>

      <DashboardContent/>

    </div>
  );
}

export default Dashboard;
