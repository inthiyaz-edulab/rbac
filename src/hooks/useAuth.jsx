// src/hooks/useAuth.jsx
import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const client = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
  
    console.log("Initializing Keycloak...");
  
    client
      .init({
        onLoad: "login-required",
      })
      .then((authenticated) => {
        console.log("Authenticated:", authenticated);
        setLogin(authenticated);
  
        if (authenticated) {
          console.log("Token:", client.token);
          setToken(client.token);
  
          // Extract roles from the Keycloak token
          const decodedToken = client.tokenParsed;
          const userRoles = decodedToken?.realm_access?.roles || [];
          setRoles(userRoles);
  
          // Calculate time until token expires and set interval accordingly
          const refreshTokenInterval = () => {
            const tokenExpiryTime = decodedToken.exp * 1000; // Convert to milliseconds
            const currentTime = Date.now();
            const timeUntilExpiry = tokenExpiryTime - currentTime;
            const refreshInterval = Math.max(timeUntilExpiry - 5000, 5000); // At least 5 seconds before expiry
  
            return setInterval(() => {
              client
                .updateToken(5)
                .then((refreshed) => {
                  console.log("Token refreshed:", refreshed);
                  if (refreshed) {
                    setToken(client.token);
                    // Re-extract roles in case they change
                    const updatedToken = client.tokenParsed;
                    const updatedRoles = updatedToken?.realm_access?.roles || [];
                    setRoles(updatedRoles);
                  }
                })
                .catch((err) => console.error("Failed to refresh token:", err));
            }, refreshInterval);
          };
  
          const intervalId = refreshTokenInterval();
          return () => clearInterval(intervalId); // Cleanup interval on component unmount
        }
      })
      .catch((err) => {
        console.error("Failed to initialize Keycloak:", err);
        console.error("Error details:", {
          url: import.meta.env.VITE_KEYCLOAK_URL,
          realm: import.meta.env.VITE_KEYCLOAK_REALM,
          clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
        });
      });
  }, []);
  
  return [isLogin, token, roles];
};

export default useAuth;


