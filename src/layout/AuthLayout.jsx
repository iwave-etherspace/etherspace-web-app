import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default AuthLayout;