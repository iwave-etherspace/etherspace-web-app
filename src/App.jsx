import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Overview from "./pages/Overview/Overview";
import History from "./pages/History/History";
import Accounts from "./pages/Accounts/Account";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          <Route path="/" element={<Overview />} />

          <Route path="/history" element={<History />} />

          <Route path="/account/*" element={<Accounts />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;