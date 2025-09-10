import React, { useState, useMemo, memo } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import HistoryTable from "./HistoryTable";
import TicketModal from "./TicketModal";

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
  {
    id: 1244237,
    amount: "₱100",
    dateOfPayment: "Aug 15, 2025",
    game: "6/45",
    drawDate: "Aug 19, 2025",
    status: "Successful",
  },
];


const PaymentHistory = (({overviewMode}) => {
  //const [query, setQuery] = useState("");
  const queryState = useState("");
  const query = queryState[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleData7;
    return sampleData7.filter((row) =>
      [
        row.id,
        row.amount,
        row.dateOfPayment,
        row.game,
        row.drawDate,
        row.status,
        String(row.id),
      ].some((val) => val.toString().toLowerCase().includes(q))
    );
  }, [query]);
  
  const [showTicket, setShowTicket] = useState({enabled:false,id:""});

  return (
  <>
    {/* TODO: stop whole PaymentHistory component from rerendering each time user opens a Modal */}
    <TicketModal showTicket={showTicket} onClose={()=>setShowTicket({enabled:false,id:""})}/>

    {console.log("rendering PaymentHistory")}

    <HistoryTable data={sampleData7} queryState={queryState} filtered={filtered}
      id={"paymenthistory"} 
      overviewMode={overviewMode}
      headerLabel1={
        <div className="grid items-center">
          <span className={`font-semibold text-gray-800 font-sans ${
            overviewMode
            ?"md:text-xs text-lg"
            :"text-lg"
          }`}>
            Payment History
          </span>
        </div>
      }
      headerLabel2={
        <div className="md:ml-20 grid items-center">
          <span className="text-gray-400 grid md:justify-end text-sm">
            This Week
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
            <th className="py-3">Reference No.</th>
            <th className="py-3">Amount</th>
            <th className="py-3">Date of Payment</th>
            <th className="py-3">Game</th>
            <th className="py-3">Draw Date</th>
            <th className="py-3">Status</th>
            <th className="py-3">Action</th>
          </tr>
        </>
      }
      tableBodyContent={
        <>
          {filtered.map((row) => (
            <tr 
              key={row.id} //make sure to have unique key value
              className={`odd:bg-white even:bg-gray-50 text-gray-900 font-medium ${
                overviewMode ? " text-[0.5rem]":" text-xs"
              }`}
            >
              <td className="py-3">
                {row.id}
              </td>
              <td className="px-4 py-3">{row.amount}</td>
              <td className="px-4 py-3">{row.dateOfPayment}</td>
              <td className="px-4 py-3">{row.game}</td>
              <td className="px-4 py-3">{row.drawDate}</td>
              <td className={`py-3 ${
                overviewMode ? null:" px-4"
              }`}>
                <span
                  className={`px-[0.2rem] py-1 rounded-full font-medium ${
                    row.status === "Successful"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className={`py-3 ${
                overviewMode ? null:" px-4"
              }`}>
                <button onClick={(e)=>setShowTicket({enabled:true,id:row.id})}
                className={`px-3 py-1 rounded-md bg-green-100 text-green-700 hover:bg-green-200 font-medium ${
                  overviewMode ? " text-[0.5rem]":" text-xs"
                }`}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </>
      }
      tableBodyContentMobile={
        <>
          {filtered.map((row) => (
            <div
              key={row.id}
              className="bg-white border border-gray-200 shadow rounded-lg p-4 space-y-3"
            >

              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-400">Reference no.</p>
                <span
                  className={`text-sm font-semibold ${
                    row.status === "Successful" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {row.status}
                </span>
              </div>
              <p className="text-lg font-bold text-gray-800">{row.id}</p>


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


              <button onClick={(e)=>setShowTicket({enabled:true,id:row.id})}
              className="w-full bg-green-100 text-green-700 font-medium py-2 rounded-full mt-3 hover:bg-green-200">
                View
              </button>
            </div>
          ))}
        </>
      }
    />
    
  </>
  );
});
export default PaymentHistory;