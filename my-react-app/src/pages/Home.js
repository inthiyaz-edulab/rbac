// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Application</h1>
      <p>This is the home page, accessible to all authenticated users.</p>
      {/* Links to navigate to different dashboards based on user role */}
      <div>
        <h2>Navigate to Dashboards</h2>
        <p><Link to="/admin">Go to Admin Dashboard</Link></p>
        <p><Link to="/user">Go to User Dashboard</Link></p>
      </div>
    </div>
  );
};

export default Home;
