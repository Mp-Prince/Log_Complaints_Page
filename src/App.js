import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./pages/NavBar";
import LogComplaintForm from "./pages/LogComplaint/LogComplaintForm";
import ViewStatus from "./pages/ViewStatus";
import Profile from "./pages/Profile";

// function Home() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2 style={{ marginBottom: 8 }}>Welcome</h2>
//       <p style={{ opacity: 0.85 }}>
//         Use the navbar to log a complaint, view status, or open your profile.
//       </p>
//     </div>
//   );
// }

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

