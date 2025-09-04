import React, { useState, useMemo } from "react";

const sampleData7 = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    department: "Finance",
    location: "Manila",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Inactive",
    department: "Marketing",
    location: "Cebu",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Viewer",
    status: "Active",
    department: "IT",
    location: "Davao",
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
    <div className="w-full max-w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 font-sans">
          Payment History
        </h2>

        {/* Search */}
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="px-3 py-2 w-64 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-label="Search table"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-x-auto font-sans text-center ">
        <table className="min-w-full table-auto text-gray-400 text-xs">
          <thead>
            <tr>
              <th className="px-4 py-3  text-wrap">Payment Reference No.</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date of Payment</th>
              <th className="px-4 py-3">Game</th>
              <th className="px-4 py-3">Draw Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Ticket</th>
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
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">{row.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {row.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {row.email}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {row.role}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {row.department}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {row.location}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
