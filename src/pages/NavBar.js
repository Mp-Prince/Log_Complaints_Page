import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-container">
        <Link to="/LogComplaint/LogComplaintForm" className="navbar-logo" aria-label="Go to home">
          <span className="navbar-logo-mark" aria-hidden="true">
            ◆
          </span>
          <span className="navbar-logo-text">LogComplaint</span>
        </Link>

        <ul className="nav-menu" aria-label="Navigation links">
          <li className="nav-item">
            <Link to="/LogComplaint/LogComplaintForm" className="nav-links">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/log-complaint" className="nav-links">
              Log Complaint
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
