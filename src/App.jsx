// src/App.jsx
import React from "react";
import useAuth from "./hooks/useAuth";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";
import DefaultDashboard from "./components/DefaultDashboard"; // Added default case for unknown roles

function App() {
  const [isLogin, token, roles] = useAuth(); // Using Keycloak auth hook

  if (!isLogin) {
    return <div>Loading...</div>; // Display loading while auth is being handled
  }

  // Role-based rendering
  if (roles.includes("Admin")) {
    return <AdminDashboard />; // Admin sees the Admin Dashboard
  } else if (roles.includes("Student")) {
    return <StudentDashboard />; // Student sees the Student Dashboard
  } else {
    return <DefaultDashboard />; // A default dashboard for other roles
  }
}

export default App;
