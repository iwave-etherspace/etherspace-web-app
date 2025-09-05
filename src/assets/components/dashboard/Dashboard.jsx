"use client";
import * as React from "react";
import SideBar from "./side/SideBar.jsx";
import DashboardContent from "./content/DashboardContent";

function Dashboard() {
  return (
    /* <div className="h-full p-12">
      <div className="bg-[#F9F9F9] font-['Inter'] grid grid-cols-[1fr_7fr] gap-4">
        <SideBar/>
        <DashboardContent firstName={"Sharmaine"} lastName={"Kho"} userContact={"+(63) 913 142 5241"} profileImage={"src/assets/imgs/default-avatar-female.png"}/>
      </div>
    </div> */

    <div className="h-dvh border-[1rem] border-amber-500 grid grid-cols-[10rem_7fr] grid-rows-[1fr_auto] gap-4">
      <div className="col-start-1">
        <SideBar/>
      </div>
      <div>
        <DashboardContent firstName={"Sharmaine"} lastName={"Kho"} userContact={"+(63) 913 142 5241"} profileImage={"src/assets/imgs/default-avatar-female.png"}/>
      </div>
      <div className="row-start-2 col-span-2 ">
        <div className="text-[#091237] text-[0.5rem] font-normal leading-5 self-end">powered by: etherspace</div>
      </div>
    </div>
  );
}

export default Dashboard;
