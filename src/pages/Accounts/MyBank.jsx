import React, { useState } from "react";

const MyBank = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full p-4 sm:p-6 text-gray-700">
      <h3 className="text-lg md:text-xl font-bold mb-4">Cash Out</h3>
      <hr className="mb-6 border-gray-300 w-full" />

      <div>
        <h4 className="text-base md:text-lg font-bold mb-2">Request Payout</h4>
        <p className="text-sm text-gray-500 mb-3">
          Fill in the following details to request payout
        </p>

        {/* Bank Name */}
        <div className="mt-4">
          <label className="text-sm text-gray-400">*Bank Name</label>
          <select className="w-full bg-gray-100 text-sm px-3 py-2 md:py-3 rounded mt-1 text-gray-500">
            <option>Select Bank Name</option>
            <option>BDO</option>
            <option>PNB</option>
            <option>MetroBank</option>
          </select>
        </div>

        {/* Account Name */}
        <div className="mt-4 text-gray-400">
          <label className="text-sm">*Account Name</label>
          <input
            type="text"
            className="w-full bg-gray-100 px-3 py-2 md:py-3 rounded mt-1 text-gray-700 text-sm"
            placeholder="Account Name"
          />
        </div>

        {/* Account Number */}
        <div className="mt-4 text-gray-400">
          <label className="text-sm">*Account Number</label>
          <input
            type="number"
            className="w-full bg-gray-100 px-3 py-2 md:py-3 rounded mt-1 text-gray-700 text-sm"
            placeholder="Account Number"
          />
        </div>

        {/* Amount */}
        <div className="mt-4 text-gray-400">
          <label className="text-sm">*Amount</label>
          <input
            type="number"
            className="w-full bg-gray-100 px-3 py-2 md:py-3 rounded mt-1 text-gray-700 text-sm"
            placeholder="Amount"
          />
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Note: Pay out request requires a minimum of 200 pesos.
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full px-4 py-2 md:py-3 bg-blue-900 text-white rounded-lg shadow 
                       hover:bg-blue-600 focus:outline-none focus:ring-2 
                       focus:ring-blue-400 transition"
          >
            Proceed
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirm Transaction</h2>
            <p className="text-sm text-gray-600 mb-6">
              Please review your request before confirming.
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => alert("Confirmed!")}
                className="px-4 py-2 rounded-lg bg-[#C96440] text-white hover:bg-[#b35334] transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBank;
