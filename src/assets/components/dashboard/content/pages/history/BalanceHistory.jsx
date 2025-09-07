import React, { useState, useMemo } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import HistoryTable from "./HistoryTable";

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

const BalanceHistory = ({overviewMode}) => {
  //const [query, setQuery] = useState("");
  const queryState = useState("");
  const query = queryState[0];

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
    <HistoryTable data={sampleData} queryState={queryState} filtered={filtered}
      id={"balancehistory"} 
      overviewMode={overviewMode}
      headerLabel1={
        <div className={`grid items-center ${
          overviewMode
          ? " col-span-2"
          : null
        }`}>
          <span className={`font-semibold text-gray-800 font-sans ${
            overviewMode
            ?"md:text-xs text-lg"
            :"text-lg"
          }`}>
            Balance History
          </span>
        </div>
      }
      tableHeadContent={
        <>
          <tr className={`text-gray-400 text-center font-[400]${
            overviewMode 
            ?" text-[0.5rem]"
            :" text-xs"
          }`}>
            <th className="py-3">Activity</th>
            {!overviewMode && <th className="py-3">Payment Reference No.</th>}
            <th className="py-3">Cash in/out</th>
            {!overviewMode && <th className="py-3">Mode of Payment</th>}
            <th className="py-3">Status</th>
          </tr>
        </>
      }
      tableBodyContent={
        <>
          {filtered.map((row) => (
            <tr
                key={row.activity}
                className={`odd:bg-white even:bg-gray-50 text-sm text-gray-900 ${
                overviewMode ? " text-[0.5rem]":" text-xs"
              }`}
            >
              {overviewMode 
              ?
                <>
                  <td className="px-4 py-3">
                  {row.activity}
                  </td>
                  <td className="px-4 py-3">
                  {row.amount}
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-1.5 py-1 rounded-full font-medium ${
                        row.status === "Success"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                        {row.status}
                    </span>
                  </td>
                </>
              : 
                <>
                  <td className="px-4 py-3">
                  {row.activity}
                  </td>
                  <td className="px-4 py-3">
                  {row.refNo}
                  </td>
                  <td className="px-4 py-3">
                  {row.amount}
                  </td>
                  <td className="px-4 py-3">
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
                </>
              }
                
            </tr>
          ))}
        </>
      }
      tableBodyContentMobile={
        <>
          {filtered.map((row) => (
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
          ))}
        </>
      }
    />
  );
}

export default BalanceHistory;
