import React, { useState, useMemo } from "react";

const sampleData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Viewer",
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Lee",
    email: "bob@example.com",
    role: "Editor",
    status: "Active",
  },
];

export default function BalanceHistory() {
  const [query, setQuery] = useState("");

  // simple filter: checks if query exists in any visible field
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleData;
    return sampleData.filter((row) =>
      [row.name, row.email, row.role, row.status, String(row.id)].some((val) =>
        val.toLowerCase().includes(q)
      )
    );
  }, [query]);

  return (
    <div className="w-full max-w-full">
      {/* Header: title on left + search on right */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 font-sans">
          Balance History
        </h2>

        {/* Search */}
        <div className="flex items-center">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="px-3 py-2 w-64 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label="Search table"
          />
        </div>
      </div>

      {/* Table container (white, no borders) */}
      <div className="bg-white rounded-lg shadow-sm font-sans text-center text-gray-400 text-xs">
        <table className="min-w-full w-full table-auto">
          <thead>
            <tr>
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
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
