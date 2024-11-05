// // src/App.jsx

// import Protected from "./components/Protected";
// import Public from "./components/Public";

// import useAuth from "./hooks/useAuth";

// function App() {
//   const [isLogin, token] = useAuth();
//   return isLogin ? <Protected token={token} /> : <Public />;
// }

// export default App;

// src/App.jsx

// import Protected from "./components/Protected";
// import Public from "./components/Public";
// import useAuth from "./hooks/useAuth";

// function App() {
//   const [isLogin, token] = useAuth();
//   return isLogin ? <Protected token={token} /> : <Public />;
// }

// export default App;


// src/App.jsx
import Protected from "./components/Protected";
import Public from "./components/Public";
import useAuth from "./hooks/useAuth";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard"; // Updated to reflect your "student" role
import DefaultDashboard from "./components/DefaultDashboard";

function App() {
  const [isLogin, token, roles] = useAuth();

  if (!isLogin) {
    return <Public />;
  }

  console.log("Roles received:", roles);

  // Role-based rendering
  if (roles.includes("Admin")) {
    return <AdminDashboard />;
  } else if (roles.includes("Student")) {
    return <StudentDashboard />; // Navigates to the student dashboard for the "student" role
  } else {
    return <DefaultDashboard />;
  }
}

export default App;