import React, { useState, useMemo } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const sampleData7 = [
  {
    id: 1244235,
    amount: "₱100",
    dateOfPayment: "Aug 15, 2025",
    game: "6/45",
    drawDate: "Aug 19, 2025",
    status: "Successful",
  },
  {
    id: 1244236,
    amount: "₱200",
    dateOfPayment: "Aug 12, 2025",
    game: "6/49",
    drawDate: "Aug 17, 2025",
    status: "Failed",
  },
];
export default function PaymentHistory() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleData7;
    return sampleData7.filter((row) =>
      [
        row.name,
        row.email,
        row.role,
        row.status,
        row.department,
        row.location,
        String(row.id),
      ].some((val) => val.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="w-full max-w-full ml-7">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2 mt-5">
        <h2 className="text-lg font-semibold text-gray-800 font-sans">
          Payment History
        </h2>
        <div className="relative w-64 mt-5">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search something"
            className="font-sans pl-10 pr-3 py-2 w-full rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label="Search table"
          />
        </div>
      </div>

      {/* ✅ Medium+ screens: Table Layout */}
      <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-x-auto font-sans text-center">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-xs text-gray-400 text-center font[400]">
              <th className="px-4 py-3">Reference No.</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date of Payment</th>
              <th className="px-4 py-3">Game</th>
              <th className="px-4 py-3">Draw Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-sm text-gray-500"
                >
                  No results found.
                </td>
              </tr>
            ) : (
              filtered.map((row) => (
                <tr key={row.id} className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    {row.id}
                  </td>
                  <td className="px-4 py-3">{row.amount}</td>
                  <td className="px-4 py-3">{row.dateOfPayment}</td>
                  <td className="px-4 py-3">{row.game}</td>
                  <td className="px-4 py-3">{row.drawDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.status === "Successful"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="px-3 py-1 rounded-md bg-green-100 text-green-700 hover:bg-green-200 text-xs font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-4 font-sans">
        {filtered.length === 0 ? (
          <p className="text-center text-sm text-gray-500">No results found.</p>
        ) : (
          filtered.map((row) => (
            <div
              key={row.id}
              className="bg-white border border-gray-200 shadow rounded-lg p-4 space-y-3"
            >
              {/* Header Row */}
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-400">Reference no.</p>
                <span
                  className={`text-sm font-semibold ${
                    row.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {row.status === "Active" ? "Successful" : "Failed"}
                </span>
              </div>
              <p className="text-lg font-bold text-gray-800">{row.id}</p>

              {/* Details */}
              <div className="divide-y divide-gray-100 text-sm">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-medium">₱ 100</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Date of Payment</span>
                  <span className="font-medium">{row.email}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Game</span>
                  <span className="font-medium">{row.role}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Draw Date</span>
                  <span className="font-medium">{row.department}</span>
                </div>
              </div>

              {/* Button */}
              <button className="w-full bg-green-100 text-green-700 font-medium py-2 rounded-full mt-3 hover:bg-green-200">
                View
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
