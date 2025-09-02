import React from "react";
import NavBar from "./assets/components/NavBar";
import SideBar from "./assets/components/SideBar";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./assets/components/HomePage";
import RegisterPage from "./assets/components/RegisterPage";
import OtpPage from "./assets/components/OtpPage";
import RegisterWithPassword from "./assets/components/RegisterWithPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />}></Route>
      <Route path="/otpPage" element={<OtpPage />}></Route>
      <Route path="/loginWpassword" element={<RegisterWithPassword />}></Route>
    </Routes>
  );
}

export default App;
