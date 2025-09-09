import React from "react";
import WalletBalance from "../../components/WalletBalance";
import LottoCards from "../../components/LottoCards";
import PaymentHistory from '../History/PaymentHistory';
import BalanceHistory from '../History/BalanceHistory';

const Overview = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <WalletBalance />
        </div>
        
        <div className="lg:col-span-2">
          <LottoCards />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <PaymentHistory />
        </div>
        
        <div className="lg:col-span-2">
          <BalanceHistory />
        </div>
      </div>

    </div>
  );
};

export default Overview;