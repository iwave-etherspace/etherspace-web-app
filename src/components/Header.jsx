import React, { useState, useEffect } from "react";
import { BellIcon } from "@heroicons/react/24/outline";

const Header = ({ isSidebarCollapsed, toggleSidebar }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) =>
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  return (
<header
  className={`bg-white border-b border-gray-200 fixed top-0 flex flex-col z-10 transition-all duration-300
    left-0 right-0
    ${isSidebarCollapsed ? 'md:left-16' : 'md:left-64'}
  `}
>
      <div className="h-16 flex items-center justify-between px-4">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-100 mr-2 md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <h1 className="text-sm font-normal md:text-xl md:font-semibold">
            ETHERSPACE - LOTTOMATIK
          </h1>
        </div>

        <div className="flex items-center">
          {/* Desktop only */}
          <div className="hidden md:flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100 mr-4">
              <BellIcon className="h-5 w-5" />
            </button>

            <div className="flex items-center bg-etherspace-gradient rounded-md p-2 text-white">
              <div className="h-8 w-8 rounded-full overflow-hidden mr-2 border border-white border-opacity-30">
                <img
                  src="/default-avatar-female.png"
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-sm">
                <div className="font-medium">Sharmaine Kho</div>
                <div className="text-xs text-white text-opacity-80">
                  + (63) 913 142 5241
                </div>
              </div>
            </div>
          </div>

          {/* Mobile only */}
          <div className="md:hidden flex items-center space-x-3">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <BellIcon className="h-5 w-5" />
            </button>

            <div className="bg-etherspace-gradient w-12 h-12 rounded-xl flex items-center justify-center">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                <img
                  src="/default-avatar-female.png"
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-12 flex items-center justify-between px-4">
        <div className="text-lg font-bold">Welcome, Sharmaine</div>
        <div className="hidden md:block text-sm text-gray-500">
          {formatDate(currentDateTime)} | {formatTime(currentDateTime)}
        </div>
      </div>
    </header>
  );
};

export default Header;
