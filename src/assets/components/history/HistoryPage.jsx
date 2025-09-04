import React from "react";
import SideBar from "../dashboard/side/SideBar";
import BalanceHistory from "./BalanceHistory";
import BalanceHistoryContent from "./HistoryContent";
import PaymentHistory from "./PaymentHistory";

export default function BalanceHistoryPage() {
  return (
    <div className="h-full p-12">
      <div className="bg-[#F9F9F9] font-['Inter'] grid grid-cols-[1fr_7fr] gap-4">
        {/* Sidebar always takes the first column */}
        <SideBar />

        {/* Main content column */}
        <div className="flex flex-col gap-6">
          <BalanceHistoryContent
            firstName={"Sharmaine"}
            lastName={"Kho"}
            userContact={"+(63) 913 142 5241"}
            profileImage={"src/assets/imgs/default-avatar-female.png"}
          />
          <BalanceHistory />
          <PaymentHistory />
        </div>
      </div>
    </div>
  );
}
