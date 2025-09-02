import React from "react";
import BgImage from "/public/backGroundPic.png";
import Logo from "/public/logoWhite.png";
import LogoColored from "/public/logoColored.png";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate(); // to be remove, temporary for demo

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
      {/* Left Side - Form */}
      <div className="col-span-2 flex justify-center items-center bg-white p-6">
        <div className="text-center w-full max-w-sm">
          {/* <img
            src={LogoColored}
            alt="EtherSpace Logo"
            className="w-40 md:w-52 lg:w-60 mb-4"
          /> */}
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

          <div className="flex flex-col items-center space-y-4">
            <input
              type="number"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg shadow 
                         hover:bg-blue-600 focus:outline-none focus:ring-2 
                         focus:ring-blue-400 transition"
              onClick={() => navigate("/otpPage")} //Temporary for demo
            >
              Continue
            </button>

            {/* Divider */}
            <div className="flex items-center w-full my-6">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-4 text-gray-800 font-medium text-sm">
                I already set up my account
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            {/* Orange Button */}
            <button
              className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg shadow 
                         hover:bg-orange-700 focus:outline-none focus:ring-2 
                         focus:ring-orange-400 transition"
              onClick={() => navigate("/loginWPassword")} //Temporary for demo
            >
              Log in with Password
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

export default RegisterPage;
