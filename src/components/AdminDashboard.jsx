import React from "react";
import "./AdminDashboard.css"; // Make sure to add your CSS file

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
          <li>Reports</li>
          <li>Logout</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <header className="navbar">
          <div className="navbar-left">
            <h1>Admin Dashboard</h1>
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
          <h2>Welcome to the Admin Dashboard</h2>
          <p>Here you can manage users, view reports, and adjust settings.</p>
          {/* Add your additional content or components here */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
