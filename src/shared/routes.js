import Login from "../views/Login";
import Home from "../views/Home";
import RecipeSearch from "../views/RecipeSearch";
import Recipe from "../views/RecipeSearch/Recipe";

export const routes = [
  {
    path: '/recipe/:id',
    component: Recipe
  },
  {
    path: '/recipes',
    component: RecipeSearch,
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