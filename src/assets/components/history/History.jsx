import { useState } from "react";
import SideBar from "../dashboard/side/SideBar";
import BalanceHistory from "../dashboard/content/pages/history/BalanceHistory";
import HistoryContent from "./HistoryContent";

export default function History() {
  const activeContentState = useState('Overview');
  const activeContent = activeContentState[0];
  return (
    <div className="h-full p-9  bg-[#F9F9F9] mr-10">
      <div className="bg-[#F9F9F9] font-['Inter'] grid grid-cols-[1fr_7fr] gap-4">
        {/* Sidebar always takes the first column */}
        <SideBar activeContentState={activeContentState}/>
        <HistoryContent
          activeContent={activeContent}
          firstName={"Sharmaine"}
          lastName={"Kho"}
          userContact={"+(63) 913 142 5241"}
          profileImage={"src/assets/imgs/default-avatar-female.png"}
        />
      </div>
    </div>
  );
}
