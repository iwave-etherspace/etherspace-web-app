import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-2xl font-bold">Lotto</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Button (optional) */}
        <div>
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
