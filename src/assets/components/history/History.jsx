import React from "react";
import SideBar from "../dashboard/side/SideBar";
import BalanceHistory from "./content/BalanceHistory";
import PaymentHistory from "./content/PaymentHistory";
import HistoryContent from "./HistoryContent";

export default function History() {
  return (
    <div className="h-full p-12">
      <div className="bg-[#F9F9F9] font-['Inter'] grid grid-cols-[1fr_7fr] gap-4">
        {/* Sidebar always takes the first column */}
        <SideBar />

        {/* Main content column */}
        <div className="flex flex-col gap-6">
          <HistoryContent />
          <BalanceHistory />
          <PaymentHistory />
        </div>
      </div>
    </div>
  );
}
