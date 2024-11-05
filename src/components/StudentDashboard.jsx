// src/components/StudentDashboard.jsx

import React from "react";
import "./StudentDashboard.css"; // Add your CSS file

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <h2>Student Panel</h2>
        <ul>
          <li>Home</li>
          <li>My Courses</li>
          <li>Assignments</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <header className="navbar">
          <div className="navbar-left">
            <h1>Student Dashboard</h1>
          </div>
          <div className="navbar-right">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
            />
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="content">
          <h2>Welcome to the Student Dashboard</h2>
          <p>Here you can view your courses, check assignments, and update your profile.</p>
          {/* Add your additional content or components here */}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;


