"use client";
import * as React from "react";
import SideBar from "./side/SideBar.jsx";
import DashboardContent from "./content/DashboardContent";

function Dashboard() {
  return (
    <div className="h-full p-12">
      <div className="bg-[#F9F9F9] font-['Inter'] grid grid-cols-[1fr_7fr] gap-4">
        <SideBar/>
        <DashboardContent firstName={"Sharmaine"} lastName={"Kho"} userContact={"+(63) 913 142 5241"} profileImage={"src/assets/imgs/default-avatar-female.png"}/>
      </div>
    </div>
  );
}

export default Dashboard;
