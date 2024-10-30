// src/pages/User.js
import React from 'react';

const User = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome to the user dashboard. This page is accessible to users with the "user" role.</p>
      {/* Add user-specific features or information here */}
      <div>
        <h2>Your Profile</h2>
        <p>View and update your profile information.</p>
        <p>Check your messages and notifications.</p>
      </div>
    </div>
  );
};

export default User;
