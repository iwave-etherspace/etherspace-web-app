import React from "react";

const PaymentHistory = ({ overviewMode = false }) => {
  const data = [
    {
      id: "123456",
      amount: "₱500",
      dateOfPayment: "2025-09-10",
      game: "Lotto 6/42",
      drawDate: "2025-09-12",
      status: "Successful",
    },
    {
      id: "654321",
      amount: "₱300",
      dateOfPayment: "2025-09-08",
      game: "Mega Lotto 6/45",
      drawDate: "2025-09-11",
      status: "Failed",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Payment History</h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr
              className={`text-gray-400 text-center uppercase tracking-wide ${
                overviewMode ? "text-xs" : "text-sm"
              }`}
            >
              <th className="px-4 py-3">Reference No.</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date of Payment</th>
              <th className="px-4 py-3">Game</th>
              <th className="px-4 py-3">Draw Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className={`odd:bg-white even:bg-gray-50 text-gray-800 font-medium ${
                  overviewMode ? "text-xs" : "text-sm"
                }`}
              >
                <td className="px-4 py-3 text-center">{row.id}</td>
                <td className="px-4 py-3 text-center">{row.amount}</td>
                <td className="px-4 py-3 text-center">{row.dateOfPayment}</td>
                <td className="px-4 py-3 text-center">{row.game}</td>
                <td className="px-4 py-3 text-center">{row.drawDate}</td>
                <td
                  className={`px-4 py-3 text-center ${
                    row.status === "Successful"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {row.status}
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
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
            className="bg-white border border-gray-200 shadow rounded-lg p-4 space-y-3 text-sm"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Reference no.</p>
              <span
                className={`text-sm font-semibold ${
                  row.status === "Successful"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {row.status}
              </span>
            </div>
            <p className="text-lg font-bold text-gray-800">{row.id}</p>

            <div className="divide-y divide-gray-100 text-sm">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Amount</span>
                <span className="font-medium">{row.amount}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Date of Payment</span>
                <span className="font-medium">{row.dateOfPayment}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Game</span>
                <span className="font-medium">{row.game}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Draw Date</span>
                <span className="font-medium">{row.drawDate}</span>
              </div>
              <div className="flex justify-between py-2">
                <button className="text-blue-600 hover:underline">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
