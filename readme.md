# RBAC Application

This is a Role-Based Access Control (RBAC) application built with React, Keycloak for authentication, and Docker. The application demonstrates role-based access control, where different users (e.g., Admins and Users) have access to different dashboards based on their assigned roles.

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Components](#components)

## Technologies

- **React**: For building the user interface
- **Keycloak**: For managing authentication and authorization
- **Docker**: For containerizing the Keycloak server

## Features

- **User Authentication**: Implemented with Keycloak to support login and logout.
- **Role-Based Access Control**: Uses Keycloak roles to restrict access to different pages (Admin and User dashboards).
- **Protected Routes**: Only authenticated users can access the main parts of the application.
- **Dockerized Keycloak**: Keycloak is set up within Docker for easy deployment.

## Project Structure

rbac-application/ ├── public/ ├── src/ │ ├── components/ │ │ ├── ProtectedRoute.js # Route protection based on roles │ ├── pages/ │ │ ├── Admin.js # Admin dashboard │ │ ├── Home.js # Home page (accessible to all roles) │ │ ├── User.js # User dashboard │ ├── App.js # Main App component │ ├── KeycloakService.js # Keycloak initialization and instance management │ └── index.js # Entry point ├── .env # Environment variables for Keycloak config ├── docker-compose.yml # Docker configuration for Keycloak └── README.md



## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/rbac-application.git
   cd rbac-application



## Configure Environment Variables

**Create a .env file in the root directory with the following Keycloak configurations:**

```REACT_APP_KEYCLOAK_URL=http://localhost:8082/auth
REACT_APP_KEYCLOAK_REALM=your-realm
REACT_APP_KEYCLOAK_CLIENT=your-client-id```
Install Dependencies

```npm install```
Set Up Keycloak

Start the Keycloak server using Docker Compose:

```docker-compose up -d```
Access Keycloak at http://localhost:8082 and create a realm, client, and roles (admin and user).

Assign roles to specific users to enable role-based access control in the app.

Start the Application

```npm run dev```
The application will be accessible at http://localhost:5173.