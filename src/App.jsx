import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "react-oauth2-code-pkce";
import ProtectedLayout from "./layout/ProtectedLayout";
import AuthLayout from './layout/AuthLayout'

import Overview from "./pages/Overview/Overview";
import History from "./pages/History/History";
import Account from "./pages/Accounts/Account";
import Settings from "./pages/Settings/Settings";
import Help from "./pages/Help/Help";

import OtpPage from './pages/Registration/OtpPage'
import RegisterPage from './pages/Registration/RegisterPage'
import Callback from './pages/Registration/Callback';

function App() {
  const authConfig = {
    clientId: import.meta.env.VITE_OAUTH_CLIENT_ID,
    authorizationEndpoint: import.meta.env.VITE_OAUTH_AUTHORIZATION_ENDPOINT,
    tokenEndpoint: import.meta.env.VITE_OAUTH_TOKEN_ENDPOINT,
    redirectUri: import.meta.env.VITE_OAUTH_REDIRECT_URI,
    scope: import.meta.env.VITE_OAUTH_SCOPE,
    extraTokenParameters: {
      response_type: 'code'
    },
    autoLogin: false,
  };

  return (
    <AuthProvider authConfig={authConfig}>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/otp" element={<AuthLayout><OtpPage /></AuthLayout>} />
          <Route path="/" element={<AuthLayout><RegisterPage /></AuthLayout>} />
          <Route path="/callback" element={<Callback />} />
          
          {/* Protected routes - All routes under ProtectedLayout */}
          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<Overview />} />
            <Route path="/history" element={<History />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Route>
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;