import React, { useState } from "react";
import AccountSetupLogo from "/public/accountSetupLogo.png";
import BgImage from "/public/backGroundPic.png";
import Logo from "/public/logoWhite.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AccountSetupPage = () => {
  const [date, setDate] = useState(null);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
      {/* Left Side - Form */}
      <div className="col-span-2 flex justify-center items-center bg-white p-10 lg:p-20">
        <div className="w-full max-w-2xl">
          <p className="text-xl font-bold font-sans text-black text-center">
            Account Setup
          </p>
          <p className="text-[0.725rem] font-sans text-gray-800 text-center mb-4">
            Just a few more details, and we're set!
          </p>
          <div className="flex justify-center">
            {/* Hidden file input */}
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
            />

            {/* Label styled as an image button */}
            <label htmlFor="file-upload" className="cursor-pointer">
              <img
                src={AccountSetupLogo}
                alt="Upload"
                className="w-19 h-19 rounded-full shadow hover:opacity-80 transition"
              />
            </label>
          </div>
          <div className="text-center mb-4">
            <p className="text-[0.725rem] font-sans text-gray-800 text-center mb-2 mt-2">
              Upload Profile Picture
            </p>
            <p className="text-[0.725rem] font-sans text-gray-400 ">
              We only support JPEG or PNG file up to 1MB
            </p>
          </div>

          <div className="space-y-4">
            {/* Personal Information */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Personal Information
              </h3>

              {/* Name Fields */}
              <div className="grid grid-cols-12 gap-4 w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  className="col-span-12 sm:col-span-4 p-2 bg-gray-100 rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="col-span-12 sm:col-span-4 p-2 bg-gray-100 rounded"
                />
                {/* Middle Name */}
                <div className="col-span-6 lg:col-span-2">
                  <input
                    type="text"
                    placeholder="Middle"
                    className="w-full bg-gray-100 rounded p-2"
                  />
                </div>

                {/* Suffix */}
                <div className="col-span-6 lg:col-span-2">
                  <input
                    type="text"
                    placeholder="Suffix"
                    className="w-full bg-gray-100 rounded p-2"
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Date of Birth
                </label>
                <DatePicker
                  selected={date}
                  onChange={(d) => setDate(d)}
                  placeholderText="DD/MM/YY"
                  dateFormat="dd/MM/yy"
                  className="w-full bg-gray-100 rounded-lg p-2 lg:w-170 w-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>

            {/* Account Setup */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2 mt-7">
                Account Set Up
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="number"
                  placeholder="+(63)"
                  className="bg-gray-100 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-gray-100 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-gray-100 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Terms and Privacy */}
              <div className="mt-4 space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="h-3 w-3 rounded-full border-2 border-gray-400 text-blue-500 focus:ring-2 focus:ring-gray-300 appearance-none checked:bg-blue-800 checked:border-blue-800"
                  />
                  <span className="text-gray-700 text-xs">
                    I have read and accepted the company’s{" "}
                    <a href="#" className="text-red-500 hover:underline">
                      Terms of Service
                    </a>
                  </span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="h-3 w-3 rounded-full border-2 border-gray-400 text-blue-500 focus:ring-2 focus:ring-gray-300 appearance-none checked:bg-blue-800 checked:border-blue-800"
                  />
                  <span className="text-gray-700  text-xs">
                    By submitting this form, I accept the company’s{" "}
                    <a href="#" className="text-red-500 hover:underline">
                      Privacy Policy
                    </a>
                  </span>
                </label>

                <button
                  className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg shadow 
                         hover:bg-blue-600 focus:outline-none focus:ring-2 
                         focus:ring-blue-400 transition mt-4"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image + Logo */}
      <div
        className="hidden lg:flex col-span-1 justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <img
          src={Logo}
          alt="EtherSpace Logo"
          className="w-40 md:w-52 lg:w-60 mb-4"
        />
      </div>
    </div>
  );
};

export default AccountSetupPage;
