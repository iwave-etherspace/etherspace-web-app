import React from "react";
import AccountLogo from "/public/accountSetupLogo.png";

const MyAccount = () => {
  return (
    <div className="w-full h-full p-4 sm:p-6 text-gray-700">
      <h3 className="text-lg md:text-xl font-bold mb-4">My Profile</h3>
      <hr className="mb-6 border-gray-300 w-full" />

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img
            src={AccountLogo}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex flex-col gap-2 items-center sm:items-start mt-2 sm:mt-4">
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <button
                className="text-sm px-4 py-1 rounded-full text-white hover:opacity-90"
                style={{ backgroundColor: "#C96440" }}
              >
                + Change Image
              </button>
              <button className="border border-red-300 text-red-500 text-sm px-4 py-1 rounded-full hover:bg-red-50">
                Remove Image
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              We only support JPEG or PNG file up to 1MB max.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-sm md:text-base font-semibold mb-3">Personal Information</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-400">
          <div>
            <label className="text-sm">*Last Name</label>
            <input
              type="text"
              className="w-full bg-gray-100 px-3 py-2 md:py-3 rounded mt-1 text-gray-700 text-sm"
              defaultValue="Dela Cruz"
            />
          </div>
          <div>
            <label className="text-sm">*First Name</label>
            <input
              type="text"
              className="w-full bg-gray-100 px-3 py-2 md:py-3 rounded mt-1 text-gray-700 text-sm"
              defaultValue="Juan"
            />
          </div>
          <div>
            <label className="text-sm">Middle Name</label>
            <input
              type="text"
              className="w-full bg-gray-100 px-3 py-2 md:py-3 rounded mt-1 text-gray-700 text-sm"
              defaultValue="Castro"
            />
          </div>
          <div>
            <label className="text-sm">Suffix</label>
            <input
              type="text"
              className="w-full bg-gray-100 px-3 py-2 md:py-3 rounded mt-1 text-gray-700 text-sm"
              defaultValue="Jr"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="mt-4 text-gray-400">
          <label className="text-sm">Date of Birth</label>
          <input
            type="date"
            className="w-full bg-gray-100 px-3 py-2 md:py-3 rounded mt-1 text-gray-700 text-sm"
            defaultValue="2004-03-27"
          />
        </div>

        {/* Government ID Type */}
        <div className="mt-4">
          <label className="text-sm text-gray-400">Government ID Type</label>
          <select className="w-full bg-gray-100 px-3 py-2 md:py-3 rounded mt-1 text-gray-500 text-sm">
            <option>Select ID Type</option>
            <option>Passport</option>
            <option>Driver’s License</option>
            <option>National ID</option>
          </select>
        </div>

        <div className="mt-6">
          <button
            className="w-full px-4 py-2 md:py-3 bg-blue-900 text-white rounded-lg shadow 
                       hover:bg-blue-600 focus:outline-none focus:ring-2 
                       focus:ring-blue-400 transition"
          >
            Submit Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
