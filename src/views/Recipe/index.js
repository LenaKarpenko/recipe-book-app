import React, {useEffect, useState} from "react";
import {Box, Grid, makeStyles} from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import axios from "axios";
import SearchHeading from "../../components/Headings/SearchHeading";
import BodyCard from "../../components/Cards/BodyCard";
import RecipeCard from "../../components/Cards/RecipeCard";
import Tag from "../../components/UIElements/Tag";
import styles from "./styles";

const useStyles = makeStyles(styles)

const Recipe = () => {
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
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  const getRecipes = async () => {
    if (query === '') return
    const result = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=3ce529d2&app_key=
    579109403d27f9b4c55528bd564333a6&from=0&to=30`)
    console.log(result.data)
    setRecipes(result.data.hits)
    setTotal(result.data.count)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getRecipes()
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
            <RecipeCard imageSrc={recipe.recipe.image} title={recipe.recipe.label}/>
          </Grid>)
        }) : null}
      </Grid>
    </BodyCard>
  </Box>)
}

export default Recipe