"use client";
import * as React from "react";
import SideBar from "./side/SideBar.jsx";
import DashboardContent from "./content/DashboardContent";

function Dashboard() {
  return (
    //<div className="dashboard-container">
    <div className="h-full p-12">
      <div className="bg-[#F9F9F9] font-['Inter'] grid grid-cols-[1fr_7fr] gap-4">
        {/* <SideBar/>

        <DashboardContent/> */}
        <SideBar/>
        <DashboardContent firstName={"Sharmaine"} lastName={"Kho"} userContact={"+(63) 913 142 5241"} profileImage={"src/assets/imgs/default-avatar-female.png"}/>

        {/* <div class="bg-green-500 sm:hidden row-start-1 visible z-10">BBB</div>
        <div class="bg-red-500 sm:block hidden ">AAA</div>
        <div class="bg-blue-500">CCC</div> */}

      </div>
    </div>
  );
}

export default Dashboard;
