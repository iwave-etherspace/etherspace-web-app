"use client";
import * as React from "react";
import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";

function Dashboard() {
  return (
    <div className="dashboard-container">
      
      <SideBar/>

      <MainContent/>

    </div>
  );
}

export default Dashboard;
