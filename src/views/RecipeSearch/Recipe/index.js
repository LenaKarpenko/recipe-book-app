import React, {useContext, useState} from "react";
import {AppContext, AppActionType} from "../../../shared/reducer";
import {useLocation} from 'react-router-dom'

const Recipe = () => {
  const {reducer: {state, dispatch}} = useContext(AppContext)

  const {recipe, setRecipe} = useState({})

  const location = useLocation()

  const getRecipeByIndex = () => {
    const index = location.pathname.split('/').slice(-1).join()
    console.log(state.recipes[index - 1])
  }

  getRecipeByIndex()

  return (<div>This is the recipe page</div>)
}

export default Recipe