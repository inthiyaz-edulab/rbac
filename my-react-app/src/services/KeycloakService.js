import Keycloak from 'keycloak-js';

let keycloak;
let initialized = false;

export const getKeycloakInstance = () => {
  if (!keycloak) {
    keycloak = new Keycloak({
      url: process.env.REACT_APP_KEYCLOAK_URL,
      realm: process.env.REACT_APP_KEYCLOAK_REALM,
      clientId: process.env.REACT_APP_KEYCLOAK_CLIENT,
    });
  }
  return keycloak;
};

export const initKeycloak = (onAuthenticatedCallback) => {
  if (initialized) return; // Exit if already initialized

  const keycloakInstance = getKeycloakInstance();

  keycloakInstance.init({ onLoad: 'login-required' })
    .then((authenticated) => {
      if (authenticated) {
        onAuthenticatedCallback();
      } else {
        keycloakInstance.login();
      }
      initialized = true; // Set initialized to true once done
    })
    .catch(console.error);
};

export const getKeycloak = () => getKeycloakInstance();
