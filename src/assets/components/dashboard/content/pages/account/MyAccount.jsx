import React from "react";
import AccountLogo from "/public/accountSetupLogo.png";

const MyAccount = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 text-gray-700">
      {/* Title */}
      <h3 className="text-md font-bold mb-4">My Profile</h3>
      <hr className="mb-6 border-gray-300 w-full" />

      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        {/* Left - Avatar */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img
            src={AccountLogo}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex flex-col gap-2 items-center sm:items-start mt-4">
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <button
                className="text-xs px-4 py-1 rounded-full text-white hover:opacity-90"
                style={{ backgroundColor: "#C96440" }}
              >
                + Change Image
              </button>
              <button className="border border-red-300 text-red-500 text-xs px-4 py-1 rounded-full hover:bg-red-50">
                Remove Image
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center sm:text-left">
              We only support JPEG or PNG file up to 1MB max.
            </p>
          </div>
        </div>

        {/* Right - Verification Box (optional, uncomment if needed) */}
        {/* 
        <div className="border border-red-300 bg-red-50 text-red-600 text-xs px-4 py-3 rounded-md">
          <p className="font-medium">Account Verification Required</p>
          <p>Please fill in your details to activate full features</p>
        </div> 
        */}
      </div>

      {/* Form Section */}
      <div className="mt-8">
        <h4 className="text-xs font-semibold mb-3">Personal Information</h4>

        {/* Grid for Names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-400">
          <div>
            <label className="text-xs">*Last Name</label>
            <input
              type="text"
              className="w-full bg-gray-100 px-3 py-3 rounded mt-1 text-gray-700 text-xs"
              defaultValue="Dela Cruz"
            />
          </div>
          <div>
            <label className="text-xs ">*First Name</label>
            <input
              type="text"
              className="w-full bg-gray-100 px-3 py-3 rounded mt-1 text-gray-700 text-xs"
              defaultValue="Juan"
            />
          </div>
          <div>
            <label className="text-xs">Middle Name</label>
            <input
              type="text"
              className="w-full bg-gray-100 px-3 py-3 rounded mt-1 text-gray-700 text-xs"
              defaultValue="Castro"
            />
          </div>
          <div>
            <label className="text-xs">Suffix</label>
            <input
              type="text"
              className="w-full bg-gray-100 px-3 py-3 rounded mt-1 text-gray-700 text-xs"
              defaultValue="Jr"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="mt-4 text-gray-400">
          <label className="text-xs">Date of Birth</label>
          <div className="relative">
            <input
              type="date"
              className="w-full bg-gray-100 px-3 py-3 rounded mt-1 pr-3 text-gray-700 text-xs"
              defaultValue="2004-03-27"
            />
          </div>
        </div>

        {/* Government ID Type */}
        <div className="mt-4">
          <label className="text-xs text-gray-400">Government ID Type</label>
          <select className="w-full bg-gray-100 px-3 py-3 rounded mt-1 text-gray-500 text-xs">
            <option>Select ID Type</option>
            <option>Passport</option>
            <option>Driver’s License</option>
            <option>National ID</option>
          </select>
        </div>
        <div className="mt-4">
          <button
            className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg shadow 
                         hover:bg-blue-600 focus:outline-none focus:ring-2 
                         focus:ring-blue-400 transition mt-4"
          >
            Submit Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
