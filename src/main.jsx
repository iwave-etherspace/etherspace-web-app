import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "react-oauth2-code-pkce";

const authConfig = {
  clientId: "a9da547f-53ed-4c06-82df-6fe414edc3c7",
  authorizationEndpoint: "http://localhost:9000/auth/oauth2/authorize",
  tokenEndpoint: "http://localhost:9000/auth/oauth2/token",
  redirectUri: "http://localhost:5173/callback",
  scope:
    "openid profile email orders.read users.read users.write orders.write wallet.read tickets.read tickets.write payout.write payout.read notifications.send",
};

console.log("Auth config:", {
  clientId: import.meta.env.VITE_OAUTH_CLIENT_ID,
  authorizationEndpoint: import.meta.env.VITE_OAUTH_AUTHORIZATION_ENDPOINT,
  tokenEndpoint: import.meta.env.VITE_OAUTH_TOKEN_ENDPOINT,
  redirectUri: import.meta.env.VITE_OAUTH_REDIRECT_URI,
  scope: import.meta.env.VITE_OAUTH_SCOPE,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider authConfig={authConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
