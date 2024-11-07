// src/contexts/PermissionsContext.jsx

import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const PermissionsContext = createContext();

// Use Permissions hook
export const usePermissions = () => {
  return useContext(PermissionsContext);
};

// PermissionsProvider Component
export const PermissionsProvider = ({ children }) => {
  const [permissions, setPermissions] = useState({
    viewCourses: false,
    viewAssignments: false,
    viewProfile: false,
  });

  // Fetch permissions from the backend
  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/feature-flags");
        if (!response.ok) {
          throw new Error(`Failed to fetch feature flags: ${response.statusText}`);
        }
        const data = await response.json();
        const permissionsFromBackend = data.featureFlags.reduce((acc, feature) => {
          acc[feature.name] = feature.enabled;
          return acc;
        }, {});
        setPermissions(permissionsFromBackend);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPermissions();
  }, []);

  // Toggle permission for a specific feature
  const togglePermission = async (feature) => {
    const updatedValue = !permissions[feature];

    // Update permissions locally
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [feature]: updatedValue,
    }));

    // Send the updated permission to the backend
    try {
      const response = await fetch("http://localhost:3000/api/feature-flags/update", {
        method: "PATCH",
        body: JSON.stringify({ name: feature, enabled: updatedValue }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to update feature flag: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <PermissionsContext.Provider value={{ permissions, togglePermission }}>
      {children}
    </PermissionsContext.Provider>
  );
};
