import React, { useEffect } from 'react';
import { getKeycloak } from '../KeycloakService';

const Login = () => {
  useEffect(() => {
    getKeycloak().login();
  }, []);

  return <div>Redirecting to login...</div>;
};

export default Login;
