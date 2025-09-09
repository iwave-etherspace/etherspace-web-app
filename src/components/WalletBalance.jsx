// components/WalletBalance.jsx
import React from "react";

const WalletBalance = () => {
  return (
    <div className="bg-etherspace-gradient rounded-lg shadow p-6 text-white">
      <h2 className="text-lg  mb-4">My Balance</h2>
      <div className="text-4xl font-bold mb-6">₱ 3,027.00</div>
      <button className="w-full bg-white text-[#c96540] py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
        Request Pay Out
      </button>
    </div>
  );
};

export default WalletBalance;