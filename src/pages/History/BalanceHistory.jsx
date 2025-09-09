import React from "react";

const BalanceHistory = ({ overviewMode = false }) => {
  const data = [
    {
      activity: "Cash In",
      paymentRef: "123456789",
      cashInOut: "+ ₱1,000",
      modeOfPayment: "GCash",
      status: "Successful",
    },
    {
      activity: "Cash Out",
      paymentRef: "987654321",
      cashInOut: "- ₱500",
      modeOfPayment: "Bank Transfer",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Balance History</h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr
              className={`text-gray-400 text-center uppercase tracking-wide ${
                overviewMode ? "text-xs" : "text-sm"
              }`}
            >
              <th className="px-4 py-3">Activity</th>
              {!overviewMode && (
                <th className="px-4 py-3">Payment Reference No.</th>
              )}
              <th className="px-4 py-3">Cash in/out</th>
              {!overviewMode && <th className="px-4 py-3">Mode of Payment</th>}
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.activity}
                className={`odd:bg-white even:bg-gray-50 text-gray-800 ${
                  overviewMode ? "text-xs" : "text-sm"
                }`}
              >
                <td className="px-4 py-3 text-center">{row.activity}</td>
                {!overviewMode && (
                  <td className="px-4 py-3 text-center">{row.paymentRef}</td>
                )}
                <td className="px-4 py-3 text-center">{row.cashInOut}</td>
                {!overviewMode && (
                  <td className="px-4 py-3 text-center">{row.modeOfPayment}</td>
                )}
                <td
                  className={`px-4 py-3 text-center font-medium ${
                    row.status === "Successful"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-3">
        {data.map((row, index) => (
          <div
            key={index}
            className="divide-y divide-gray-100 bg-white shadow-sm rounded-lg p-4 space-y-2 text-sm"
          >
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Activity</span>
              <span className="text-gray-800">{row.activity}</span>
            </div>
            {!overviewMode && (
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">
                  Payment Ref No.
                </span>
                <span className="text-gray-800">{row.paymentRef}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Cash In/Out</span>
              <span className="text-gray-800">{row.cashInOut}</span>
            </div>
            {!overviewMode && (
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">
                  Mode of Payment
                </span>
                <span className="text-gray-800">{row.modeOfPayment}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Status</span>
              <span
                className={`font-semibold ${
                  row.status === "Successful"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BalanceHistory;
