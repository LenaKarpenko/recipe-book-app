import React from "react";
import {Box, makeStyles, Typography} from "@material-ui/core";
import styles from "./styles";

const useStyles = makeStyles(styles)

const RecipeCard = (props) => {
  const classes = useStyles()
  const {imageSrc, title} = props

  return (<Box className={classes.recipeCard}
               display='flex'
               p={2}
               width='170px'
               height='103px'
               flexDirection='row'>
    <Box mr={1}>
      <img src={imageSrc} className={classes.img} alt='Recipe' width='50' height='50'/>
    </Box>
    <Typography variant='h6' component='h6' noWrap={true}>{title}</Typography>
  </Box>)
}

export default RecipeCard