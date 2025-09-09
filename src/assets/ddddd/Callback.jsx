// Callback.jsx
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "react-oauth2-code-pkce";

const Callback = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // Redirect to dashboard after successful authentication
      navigate("/dashboard", { replace: true });
    }
  }, [token, navigate]);

  return <div>Completing login...</div>;
};

export default Callback;
