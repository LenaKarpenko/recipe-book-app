import React from "react";
import {Box, makeStyles, Typography} from "@material-ui/core";
import styles from "./styles";
import defaultImage from './../../../assets/img-default.jpg'

const useStyles = makeStyles(styles)

const RecipeCard = (props) => {
  const classes = useStyles()
  const {imageSrc, title, onClick} = props

  return (<Box className={classes.recipeCard}
               display='flex'
               onClick={onClick}
               p={2}
               width='170px'
               height='103px'
               flexDirection='row'>
    <Box mr={1}>
      <img src={imageSrc} className={classes.img}
           onError={e => {
             e.target.onerror = null
             e.target.src = defaultImage
           }}
           alt='Recipe' width='50' height='50'/>
    </Box>
    <Typography variant='h6' component='h6' noWrap={true}>{title}</Typography>
  </Box>)
}

export default RecipeCard