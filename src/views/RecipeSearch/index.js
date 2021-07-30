import React, {useContext, useEffect, useState} from "react";
import {Box, Grid, makeStyles} from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import SearchHeading from "../../components/Headings/SearchHeading";
import BodyCard from "../../components/Cards/BodyCard";
import RecipeCard from "../../components/Cards/RecipeCard";
import Tag from "../../components/UIElements/Tag";
import styles from "./styles";
import {getRecipes} from "../../api";
import {AppContext, AppActionType} from "../../shared/reducer";

const useStyles = makeStyles(styles)

const RecipeSearch = (props) => {
  const {reducer: { dispatch }} = useContext(AppContext)

  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])
  const [total, setTotal] = useState(0)

  const classes = useStyles()
  const history = useHistory()

  const handleBackClick = () => {
    history.goBack()
  }

  const handleQueryChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  const handleRecipeClick = (index) => (e) => {
    dispatch({type: AppActionType.SET_RECIPES, payload: recipes})
    history.push(`/recipe/${++index}`)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query === '') return

      getRecipes(query)
        .then(response => response)
        .then(result => {
          console.log(result)
          if (result.status >= 400) {
            return
          }
          setRecipes(result.data.hits)
          setTotal(result.data.count)
      }).catch(error => {
        console.log(error)
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [query])



  return (<Box display='flex'
               flexDirection='column'
               className={classes.headingBackground}>
    <SearchHeading handleBackClick={handleBackClick}
                   handleQueryChange={handleQueryChange}/>
    <BodyCard>
      {total ? <Tag label={`${total} Recipes found`}/> : null}
      <Grid container
            direction="row"
            alignItems='center'
            justify='space-between'
            spacing={3}>
        {recipes ? recipes.map((recipe, index) => {
          return (<Grid item key={index}>
            <RecipeCard imageSrc={recipe.recipe.image}
                        title={recipe.recipe.label}
                        onClick={handleRecipeClick(index)}/>
          </Grid>)
        }) : null}
      </Grid>
    </BodyCard>
  </Box>)
}

export default RecipeSearch