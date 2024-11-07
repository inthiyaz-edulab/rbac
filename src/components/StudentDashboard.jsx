// src/components/StudentDashboard.jsx

import React from "react";
import { usePermissions } from "../contexts/PermissionsContext";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const { permissions } = usePermissions();

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h2>Student Panel</h2>
        <ul>
          <li>Home</li>
          {permissions.viewCourses && <li>My Courses</li>}
          {permissions.viewAssignments && <li>Assignments</li>}
          {permissions.viewProfile && <li>Profile</li>}
          <li>Logout</li>
        </ul>
      </nav>

      <div className="main-content">
        <header className="navbar">
          <h1>Student Dashboard</h1>
        </header>

        <div className="content">
          <h2>Welcome to the Student Dashboard</h2>
          {permissions.viewCourses && (
            <p>Access your courses and track your progress.</p>
          )}
          {permissions.viewAssignments && (
            <p>Check your assignments and submit your work.</p>
          )}
          {permissions.viewProfile && (
            <p>Update your profile and view your details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
