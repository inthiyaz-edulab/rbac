// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PermissionsProvider } from "./contexts/PermissionsContext";

ReactDOM.render(
  <PermissionsProvider>
    <App />
  </PermissionsProvider>,
  document.getElementById("root")
);
