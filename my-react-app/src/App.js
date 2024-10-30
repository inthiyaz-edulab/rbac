import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initKeycloak } from './KeycloakService';
import ProtectedRoute from './ProtectedRoute';
import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/User';
import Login from './pages/Login';

function App() {
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);

  useEffect(() => {
    initKeycloak(() => setKeycloakInitialized(true));
  }, []); // Empty array ensures this only runs once

  if (!keycloakInitialized) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={<ProtectedRoute roles={['admin']} component={<Admin />} />}
        />
        <Route
          path="/user"
          element={<ProtectedRoute roles={['user']} component={<User />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
