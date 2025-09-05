import React from "react";
import SideBar from "../dashboard/side/SideBar";
import BalanceHistory from "./content/BalanceHistory";
import HistoryContent from "./HistoryContent";

export default function History() {
  return (
    <div className="h-full p-9  bg-[#F9F9F9] mr-10">
      <div className="bg-[#F9F9F9] font-['Inter'] grid grid-cols-[1fr_7fr] gap-4">
        {/* Sidebar always takes the first column */}
        <SideBar />
        <HistoryContent
          firstName={"Sharmaine"}
          lastName={"Kho"}
          userContact={"+(63) 913 142 5241"}
          profileImage={"src/assets/imgs/default-avatar-female.png"}
        />
      </div>
    </div>
  );
}
