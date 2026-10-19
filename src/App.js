import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./pages/NavBar";
import LogComplaintForm from "./pages/LogComplaint/LogComplaintForm";
import ViewStatus from "./pages/All_Complaints/ViewStatus";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LogComplaintForm />} />
        <Route path="/log-complaint" element={<LogComplaintForm />} />
        <Route path="/view-status" element={<ViewStatus />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

