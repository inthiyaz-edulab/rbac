import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/User';
import Login from './pages/Login';

const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/login", component: Login },
  { path: "/admin", component: Admin, roles: ['admin'], protected: true },
  { path: "/user", component: User, roles: ['user'], protected: true }
];

export default routes;
