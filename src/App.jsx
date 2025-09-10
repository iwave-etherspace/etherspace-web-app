import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AuthLayout from './layout/AuthLayout'

import Overview from "./pages/Overview/Overview";
import History from "./pages/History/History";
import Account from "./pages/Accounts/Account";
import General from "./pages/General/General";
import Settings from "./pages/Settings/Settings";
import Help from "./pages/Help/Help";

import OtpPage from './pages/Registration/OtpPage'
import RegisterPage from './pages/Registration/RegisterPage'
import RegisterWithPasswordPage from './pages/Registration/RegisterWithPasswordPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with sidebar and header */}
        <Route path="/" element={<Layout><Overview /></Layout>} />
        <Route path="/history" element={<Layout><History /></Layout>} />
        <Route path="/account/*" element={<Layout><Account /></Layout>} />
        <Route path="/general" element={<Layout><General /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        <Route path="/help" element={<Layout><Help /></Layout>} />
        
        {/* Routes without sidebar and header */}
        <Route path="/otp" element={<AuthLayout><OtpPage /></AuthLayout>} />
        <Route path="/register-page" element={<AuthLayout><RegisterPage /></AuthLayout>} />
        <Route path="/register-with-password" element={<AuthLayout><RegisterWithPasswordPage /></AuthLayout>} />
      </Routes>
    </Router>
  );
}

export default App;