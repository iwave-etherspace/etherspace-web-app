import React, { useContext } from "react";
import { AuthProvider, AuthContext } from "react-oauth2-code-pkce";
import BgImage from "/public/backGroundPic.png";
import Logo from "/public/logoWhite.png";
import LogoColored from "/public/logoColored.png";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { logIn } = useContext(AuthContext);

  const handleLogin = () => {
    logIn();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen ">
      {/* Left Side - Form */}
      <div className="col-span-2 flex justify-center items-center bg-white p-6">
        <div className="text-center w-full max-w-xs mb-18">
          <img
            src={LogoColored}
            alt="EtherSpace Logo"
            className="w-33  mb-4 ml-22"
          />
          <p className="text-xl font-bold font-sans text-black">
            Welcome to your
          </p>
          <p className="text-xl font-bold font-sans text-black">
            EtherSpace Account
          </p>
          <p className="mb-8 mt-2 text-gray-700 text-sm">
            Please enter the mobile number used at the time of purchase
          </p>

          <div className="flex flex-col items-center space-y-4">
            <input
              type="number"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
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
            <div className="flex items-center w-full my-5">
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
              onClick={() => handleLogin()} //Temporary for demo
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
