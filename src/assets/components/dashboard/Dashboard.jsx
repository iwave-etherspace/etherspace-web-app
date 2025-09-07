"use client";
import { useState } from 'react';
import SideBar from "./side/SideBar.jsx";
import DashboardContent from "./content/DashboardContent";

function Dashboard() {

  const activeContentState = useState('Overview');
  const activeContent = activeContentState[0];
  console.log("activeContent: ",activeContent);
  return (
    <div className="p-10 grid md:grid-cols-[10rem_7fr] grid-rows-[1fr_auto] gap-4 bg-[#F9F9F9]">
      <div className="col-start-1 max-md:hidden">
        <SideBar activeContentState={activeContentState}/>
      </div>
      
        <DashboardContent activeContent={activeContent} firstName={"Sharmaine"} lastName={"Kho"} userContact={"+(63) 913 142 5241"} profileImage={"src/assets/imgs/default-avatar-female.png"}/>
      
      <div className="row-start-2 md:col-span-2 ">
        <div className="text-[#091237] text-[0.5rem] font-normal leading-5 self-end">powered by: etherspace</div>
      </div>
    </div>
  );
}

export default Dashboard;
