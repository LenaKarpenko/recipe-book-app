import Login from "../views/Login";
import Home from "../views/Home";

export const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    component: Login
  }
]