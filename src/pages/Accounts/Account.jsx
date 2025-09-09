import React, { useState } from "react";
import {
  NavLink,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import MyAccount from "./MyAccount";
import MyBank from "./MyBank";
import Security from "./Security";

const Account = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname.split("/").pop() || "my-account"
  );

  return (
    <div className="flex flex-col xl:flex-row h-full w-full">
      <aside className="hidden xl:block w-64 bg-white rounded-lg p-5 shadow">
        <nav className="grid grid-cols-1 gap-2">
          <NavLink
            to="/account/my-account"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-[#C96440] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            My Account
          </NavLink>
          <NavLink
            to="/account/my-bank"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-[#C96440] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            My Bank
          </NavLink>
          <NavLink
            to="/account/security"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-[#C96440] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Security
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 bg-white rounded-lg shadow p-4 md:p-6 overflow-y-auto">
        <div className="flex xl:hidden gap-2 border-b border-gray-200 mb-4 overflow-x-auto">
          <NavLink
            to="/account/my-account"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium rounded-t-md ${
                isActive
                  ? "bg-[#C96440] text-white"
                  : "bg-gray-100 text-gray-700"
              }`
            }
          >
            My Account
          </NavLink>

          <NavLink
            to="/account/my-bank"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium rounded-t-md ${
                isActive
                  ? "bg-[#C96440] text-white"
                  : "bg-gray-100 text-gray-700"
              }`
            }
          >
            My Bank
          </NavLink>

          <NavLink
            to="/account/security"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium rounded-t-md ${
                isActive
                  ? "bg-[#C96440] text-white"
                  : "bg-gray-100 text-gray-700"
              }`
            }
          >
            Security
          </NavLink>
        </div>

        <Routes>
          <Route path="my-account" element={<MyAccount />} />
          <Route path="my-bank" element={<MyBank />} />
          <Route path="security" element={<Security />} />
          <Route path="*" element={<Navigate to="my-account" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default Account;
