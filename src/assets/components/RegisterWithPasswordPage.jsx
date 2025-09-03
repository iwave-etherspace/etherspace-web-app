import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BgImage from "/public/backGroundPic.png";
import Logo from "/public/logoWhite.png";
import LogoColored from "/public/logoColored.png";
import { Eye, EyeOff } from "lucide-react";

const RegisterWithPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // to be remove, temporary for demo

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
      {/* Left Side - Form */}
      <div className="col-span-2 flex justify-center items-center bg-white p-6">
        <div className="text-center w-full max-w-sm">
          <img
            src={LogoColored}
            alt="EtherSpace Logo"
            className="w-30  mb-4 ml-32"
          />
          <p className="text-2xl font-bold font-sans text-black">
            Welcome to EtherSpace!
          </p>
          <p className="mb-8 mt-2 text-gray-700">
            Please enter your mobile number to Log in and set up your account
          </p>

          <div className="flex flex-col items-center space-y-6">
            <input
              type="number"
              placeholder="Mobile Number"
              className="w-full px-3 py-3 bg-gray-200 rounded-sm shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-gray-500 
                         focus:border-gray-500 text-gray-800"
            />

            {/* Password Input with Eye Icon */}
            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 pr-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              />

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              ></button>
            </div>
            <button
              className="w-full px-4 py-3 mt-4 bg-blue-900 text-white rounded-lg shadow 
                         hover:bg-blue-600 focus:outline-none focus:ring-2 
                         focus:ring-blue-400 transition"
              onClick={() => navigate("/otpPage")} // Temporary for demo
            >
              Continue
            </button>
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

export default RegisterWithPassword;
