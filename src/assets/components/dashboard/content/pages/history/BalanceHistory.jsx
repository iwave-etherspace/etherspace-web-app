import React, { useState, useMemo } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SearchBox from "../../content-component/generic-components/SearchBox";

const sampleData = [
  {
    activity: "etap",
    refNo: 12345,
    amount: "₱100",
    modeOfPayment: "Cash",
    status: "Success",
  },
  {
    activity: "etap",
    refNo: 12345,
    amount: "₱100",
    modeOfPayment: "E-Payment",
    status: "Pending",
  },
  {
    activity: "etap",
    refNo: 12345,
    amount: "₱100",
    modeOfPayment: "Cash",
    status: "Success",
  },
  {
    activity: "etap",
    refNo: 12345,
    amount: "₱100",
    modeOfPayment: "Cash",
    status: "Success",
  },
];

export default function BalanceHistory() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleData;
    return sampleData.filter((row) =>
      [
        row.refNo,
        row.amount,
        row.modeOfPayment,
        row.status,
        String(row.activity),
      ].some((val) => val.toString().toLowerCase().includes(q))
    );
  }, [query]);

  return (
    // <div className="w-full max-w-full ml-7">
    <>
      {/* Header */}
      <div className="grid grid-col-2 grid-flow-col items-center border-[1rem] border-purple-500 ">
        
        <h2 className="text-lg font-semibold text-gray-800 font-sans">
          Balance History
        </h2>
        <div className="grid justify-end">
          <SearchBox query={query} setQuery={setQuery}/>
        </div>
      </div>

      {/* Table for medium+ screens */}
      {/* <div className="hidden md:block overflow-x-auto">
        <div className="bg-white rounded-lg shadow-sm font-sans text-center text-gray-400 text-xs">
          <table className="min-w-full w-full table-auto">
            <thead>
              <tr className="text-gray-400 text-xs md:text-xs">
                <th className="px-4 py-3">Activity</th>
                <th className="px-4 py-3">Payment Reference No.</th>
                <th className="px-4 py-3">Cash in/out</th>
                <th className="px-4 py-3">Mode of Payment</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-6 text-center text-sm text-gray-500"
                  >
                    No results found.
                  </td>
                </tr>
              ) : (
                filtered.map((row) => (
                  <tr
                    key={row.activity}
                    className="odd:bg-white even:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {row.activity}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {row.refNo}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {row.amount}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {row.modeOfPayment}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          row.status === "Success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div> */}

      {/* Cards for small screens */}
      {/* <div className="md:hidden space-y-4 font-sans">
        {filtered.length === 0 ? (
          <p className="text-center text-sm text-gray-500">No results found.</p>
        ) : (
          filtered.map((row) => (
            <div
              key={row.activity}
              className="divide-y divide-gray-100  bg-white shadow-sm rounded-lg p-4 space-y-2 text-sm"
            >
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Activity</span>
                <span className="text-gray-800">{row.activity}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">
                  Payment Ref No.
                </span>
                <span className="text-gray-800">{row.refNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Cash in/out</span>
                <span className="text-gray-800">{row.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">
                  Mode of Payment
                </span>
                <span className="text-gray-800">{row.modeOfPayment}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Status</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    row.status === "Success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {row.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div> */}
    </>
  );
}
