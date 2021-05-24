import React from "react";
import {Box, makeStyles} from "@material-ui/core";
import styles from "./styles";

const useStyles = makeStyles(styles)

const colors = {
  recipes: '#096B91',
  chats: '#82C6E6',
  networks: '#79C8A6',
  friends: '#946222',
  favourites: '#FF3B30',
  uploads: '#FFBD49'
}

const MenuCard = (props) => {
  const {type} = props
  const classes = useStyles()

  return (
    <Box className={classes.card}
         display='flex'
         flexDirection='column'
         alignItems='center'
         justifyContent='center'>
      <img src={require(`./../../../assets/icon-${type}.svg`).default} alt={type}/>
      <span style={{color: colors[`${type}`]}}>{type}</span>
    </Box>)
}

export default MenuCard