import React from "react";
import "./PrincipleDashboard.css"; // Make sure to add your CSS file for styling

const PrincipleDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <h2>Principal Panel</h2>
        <ul>
          <li>Overview</li>
          <li>Teachers</li>
          <li>Students</li>
          <li>Classes</li>
          <li>Reports</li>
          <li>Logout</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <header className="navbar">
          <div className="navbar-left">
            <h1>Principal Dashboard</h1>
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
          <h2>Welcome to the Principal Dashboard</h2>
          <p>Here you can manage teachers, view classes, and monitor student performance.</p>
          {/* Add your additional content or components here */}
        </div>
      </div>
    </div>
  );
};

export default PrincipleDashboard;
