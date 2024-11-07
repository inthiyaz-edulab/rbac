// src/components/AdminDashboard.jsx

import React from "react";
import { usePermissions } from "../contexts/PermissionsContext";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const { permissions, togglePermission } = usePermissions();

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
        <header className="navbar">
          <h1>Admin Dashboard</h1>
        </header>

        {/* Admin Controls for Student Features */}
        <div className="permissions-control">
          <h2>Control Student Features</h2>
          
          {permissions && (
            <>
              <label>
                <input
                  type="checkbox"
                  checked={permissions.viewCourses || false}
                  onChange={() => togglePermission("viewCourses")}
                />
                View Courses
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={permissions.viewAssignments || false}
                  onChange={() => togglePermission("viewAssignments")}
                />
                View Assignments
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={permissions.viewProfile || false}
                  onChange={() => togglePermission("viewProfile")}
                />
                View Profile
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
