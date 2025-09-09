// ProtectedRoute.jsx - FIXED VERSION
import React, { useContext } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token, loginInProgress } = useContext(AuthContext);

  // Show loading while login is in progress
  if (loginInProgress) {
    return <div>Loading...</div>;
  }

  // If no token, redirect to home page (not login)
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // If authenticated, show the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
