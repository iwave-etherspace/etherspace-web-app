import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  ClockIcon,
  UserIcon,
  CogIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import EtherSpaceLogo from './EtherSpaceLogo'

const Sidebar = ({ isCollapsed, toggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Overview",
      icon: <HomeIcon className="h-5 w-5" />,
      path: "/",
    },
    {
      name: "History",
      icon: <ClockIcon className="h-5 w-5" />,
      path: "/history",
    },
    {
      name: "Account",
      icon: <UserIcon className="h-5 w-5" />,
      path: "/account",
    },
    {
      name: "Dashboard Settings",
      icon: <ChartBarIcon className="h-5 w-5" />,
      path: "/settings",
    },
    {
      name: "Help",
      icon: <QuestionMarkCircleIcon className="h-5 w-5" />,
      path: "/help",
    },
  ];

  const handleLogout = async () => {
    try {
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
<aside
  className={`
    bg-gray-50 border-r border-gray-200 h-screen flex flex-col
    transition-all duration-300 ease-in-out
    ${isSidebarOpen ? 'w-64' : ''}
    ${isCollapsed ? 'md:w-16' : 'md:w-64'}
  `}
>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && <EtherSpaceLogo />}
        
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-200"
        >
          {isSidebarOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div className="p-4 flex-grow overflow-y-auto">
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-md mb-1 ${
                  isActive 
                    ? "bg-[#c96540] text-white" 
                    : "text-gray-700 hover:bg-gray-200"
                } ${isCollapsed ? 'justify-center' : ''}`
              }
              onClick={() => window.innerWidth < 768 && toggleSidebar()}
            >
              <div className="flex items-center justify-center w-6 h-6">
                {item.icon}
              </div>
              {!isCollapsed && (
                <span className="ml-2 text-sm">{item.name}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className={`flex items-center w-full p-2 rounded-md hover:bg-gray-200 text-gray-700 ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <div className="flex items-center justify-center w-6 h-6">
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
          </div>
          {!isCollapsed && <span className="ml-2 text-sm">Log Out</span>}
        </button>
        
        {!isCollapsed && (
          <div className="mt-4 text-xs text-gray-500 text-center">
            powered by: etherspace
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;