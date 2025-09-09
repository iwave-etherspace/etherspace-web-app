import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const closeSidebar = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen relative">
      <div
        className={`fixed inset-0 bg-black opacity-30 z-20 md:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={closeSidebar}
      />
      <div
        className={`
    fixed inset-y-0 left-0 z-30
    transform transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:relative md:translate-x-0
  `}
      >
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>

      {/* Pages Content */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        <Header
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <main className="flex-1 overflow-y-auto mt-28 p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
