import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./assets/components/HomePage";
import RegisterPage from "./assets/components/RegisterPage";
import OtpPage from "./assets/components/OtpPage";
import AccountSetupPage from "./assets/components/AccountSetupPage";
import Dashboard from "./assets/components/Dashboard";
import './assets/styles/dashboard.css'

function App() {
  return (
    /*<Routes>
      <Route path="/" element={<RegisterPage />}></Route>
      <Route path="/otpPage" element={<OtpPage />}></Route>
      <Route path="/loginWpassword" element={<RegisterWithPassword />}></Route>
      <Route path="/accountSetupPage" element={<AccountSetupPage />}></Route>
    </Routes>
    */
   <Dashboard/>
  );
}

export default App;
