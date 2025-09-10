import React, { useState } from "react";

const MyBank = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 text-gray-700">
      {/* Title */}
      <h3 className="text-md font-bold mb-4">Cash Out</h3>
      <hr className="mb-6 border-gray-300 w-full" />

      {/* Form Section */}
      <div className="mt-4">
        {" "}
        <h4 className="text-sm font-bold mb-2">Request Payout</h4>
        <h4 className="text-xs mb-3">
          Fill in the following details to request payout
        </h4>
        {/* Bank Name */}
        <div className="mt-4">
          <label className="text-xs text-gray-400">*Bank Name</label>
          <select className="w-full bg-gray-100 text-xs px-3 py-3 rounded mt-1 text-gray-500">
            <option>Select Bank Name</option>
            <option>BDO</option>
            <option>PNB</option>
            <option>MetroBank</option>
          </select>
        </div>
        {/* Account Name */}
        <div className="mt-4 text-gray-400">
          <label className="text-xs">*Account Name</label>
          <div className="relative">
            <input
              type="text"
              className="w-full bg-gray-100 px-3 py-3 rounded mt-1 pr-3 text-gray-700 text-xs"
              placeholder="Account Name"
            />
          </div>
        </div>
        {/* Account Number */}
        <div className="mt-4 text-gray-400">
          <label className="text-xs">*Account Number</label>
          <div className="relative">
            <input
              type="number"
              className="w-full bg-gray-100 px-3 py-3 rounded mt-1 pr-3 text-gray-700 text-xs"
              placeholder="Account Number"
            />
          </div>
        </div>
        {/* Amount*/}
        <div className="mt-4 text-gray-400">
          <label className="text-xs">*Amount</label>
          <div className="relative">
            <input
              type="number"
              className="w-full bg-gray-100 px-3 py-3 rounded mt-1 pr-3 text-gray-700 text-xs"
              placeholder="Amount"
            />
            <p className="text-xs text-gray-400 text-center sm:text-left mt-2">
              Note: Pay out request required a minimum amount of 200 pesos.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg shadow 
                         hover:bg-blue-600 focus:outline-none focus:ring-2 
                         focus:ring-blue-400 transition mt-4"
          >
            Proceed
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          {/* Modal box */}
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            {/* Modal content */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Modal Title
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              This is a sample modal. You can put forms, alerts, or any content
              here.
            </p>

            {/* Action buttons */}
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
