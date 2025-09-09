import React from "react";
import PaymentHistory from "../History/PaymentHistory";
import BalanceHistory from "../History/BalanceHistory";

const History = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <BalanceHistory />
      </div>

      <div>
        <PaymentHistory />
      </div>
    </div>
  );
};


export default History;
