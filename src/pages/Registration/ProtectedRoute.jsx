import React, { useContext } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token, loginInProgress } = useContext(AuthContext);

  if (loginInProgress) {
    return <div>Loading...</div>;
  }

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
