import Login from "../views/Login";
import Home from "../views/Home";
import Recipe from "../views/Recipe";

export const routes = [
  {
    path: '/recipe',
    component: Recipe
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    component: Login
  }
]