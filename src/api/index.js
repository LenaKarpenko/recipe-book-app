import axios from "axios";

export const getRecipes = async (query) => {
  return axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=3ce529d2&app_key=
    579109403d27f9b4c55528bd564333a6`)
}