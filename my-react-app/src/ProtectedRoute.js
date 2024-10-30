import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getKeycloak } from './KeycloakService';

const ProtectedRoute = ({ component, roles }) => {
  const keycloak = getKeycloak();

  if (!keycloak.authenticated) {
    return <Navigate to="/login" />;
  }

  if (roles && roles.length > 0) {
    const hasRole = roles.some((role) => keycloak.hasRealmRole(role));
    if (hasRole) return component;
    else return <Navigate to="/" />;
  }

  return component;
};

export default ProtectedRoute;
