// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./assets/components/RegisterPage";
import OtpPage from "./assets/components/OtpPage";
import AccountSetupPage from "./assets/components/AccountSetupPage";
import Dashboard from "./assets/components/dashboard/Dashboard";
import RegisterWithPasswordPage from "./assets/components/RegisterWithPasswordPage";
import ProtectedRoute from "./assets/components/ProtectedRoute";
import Callback from "./assets/components/Callback"; // Don't forget this!

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<RegisterPage />} />
      <Route path="/otpPage" element={<OtpPage />} />
      <Route path="/loginWpassword" element={<RegisterWithPasswordPage />} />
      <Route path="/callback" element={<Callback />} />

      {/* Protected */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/accountSetupPage"
        element={
          <ProtectedRoute>
            <AccountSetupPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
