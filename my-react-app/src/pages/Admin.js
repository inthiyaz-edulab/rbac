// src/pages/Admin.js
import React from 'react';

const Admin = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard. Only users with the "admin" role can view this page.</p>
      <div>
        <h2>Admin Controls</h2>
        <ul>
          <li>Manage Users</li>
          <li>View System Logs</li>
          <li>Adjust Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
