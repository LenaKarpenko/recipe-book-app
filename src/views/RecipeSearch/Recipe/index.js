import React, {useContext, useEffect, useState} from "react";
import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {AppContext} from "../../../shared/reducer";
import {useLocation} from 'react-router-dom'
import styles from "./styles";
import RecipeInfoCard from "../../../components/Cards/RecipeInfoCard";

const useStyles = makeStyles(styles)

const Recipe = () => {
  const {reducer: {state}} = useContext(AppContext)

  const [recipe, setRecipe] = useState({})

  const location = useLocation()
  const classes = useStyles()

  const getRecipeByIndex = () => {
    const index = location.pathname.split('/').slice(-1).join()
    setRecipe({...state.recipes[index - 1]?.recipe})
  }

  useEffect(() => {
    getRecipeByIndex()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  console.log(recipe)

  return (<Container>
    <Grid container
          direction="row"
          alignItems="flex-start"
    >
      <img src={recipe.image} alt={recipe.label} width={300} height={300}/>
      <div>
        <Typography variant='h2' component='h2'>{recipe.label}</Typography>
        <Typography variant='caption'>Source: <span style={{color: '#34A853'}}>{recipe.source}</span></Typography>
        <Box display='flex'
             justifyContent='space-between'
             alignItems='center'>
          <RecipeInfoCard label='Calories' value={Math.round(recipe.calories)}/>
          <RecipeInfoCard label='Servings' value={recipe.yield}/>
          <RecipeInfoCard label='Ingredients' value={recipe.ingredients?.length}/>
        </Box>

      </div>

    </Grid>
  </Container>)
}

export default Recipe