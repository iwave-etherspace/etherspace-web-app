import React from "react";
import NavBar from "./assets/components/NavBar";
import SideBar from "./assets/components/SideBar";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./assets/components/HomePage";
import RegisterPage from "./assets/components/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegisterPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
