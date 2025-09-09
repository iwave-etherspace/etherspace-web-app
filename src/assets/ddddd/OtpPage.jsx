import React, { useState, useRef } from "react";
import BgImage from "/public/backGroundPic.png";
import Logo from "/public/logoWhite.png";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next box automatically
      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const navigate = useNavigate(); // to be remove, temporary for demo

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
      {/* Left Side - Form */}
      <div className="col-span-2 flex justify-center items-center bg-white p-6 mb-15">
        <div className="text-center w-full max-w-sm">
          <p className="text-2xl font-bold font-sans text-black">
            Input OTP Code
          </p>
          <p className="mb-8 mt-2 text-gray-700">
            We have sent an OTP code to ouor contact number 09******72. Enter
            the OTP code to verify.
          </p>

          <div className="flex gap-2 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center bg-gray-100 rounded-lg 
                     focus:outline-none focus:border-blue-700 text-lg"
              />
            ))}
          </div>

          <div className="flex flex-col items-center space-y-4">
            <p className="mb-8 mt-2 text-gray-700">
              Using Different Phone Number?
              <span className="mb-8 mt-2 text-red-700"> Change</span>
            </p>

            <button
              className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg shadow 
                         hover:bg-blue-600 focus:outline-none focus:ring-2 
                         focus:ring-blue-400 transition"
              onClick={() => navigate("/accountSetupPage")} //Temporary for demo
            >
              Continue
            </button>

            <button
              className="w-full px-4 py-2 bg-white text-orange-700 border border-orange-600 
             rounded-lg shadow hover:bg-orange-600 hover:text-white 
             focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              onClick={() => navigate("/otpPage")} //Temporary for demo
            >
              Resend OTP
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

export default OtpPage;
