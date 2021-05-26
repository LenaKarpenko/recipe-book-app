import React from "react";
import {Box, makeStyles} from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import SearchHeading from "../../components/Headings/SearchHeading";
import BodyCard from "../../components/Cards/BodyCard";
import styles from "./styles";

const useStyles = makeStyles(styles)

const Recipe = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleBackClick = () => {
    history.goBack()
  }

  return (<Box display='flex'
               flexDirection='column'
               height='100vh'
               className={classes.headingBackground}>
    <SearchHeading handleBackClick={handleBackClick}/>
    <BodyCard>
      Recipes
    </BodyCard>
  </Box>)
}

export default Recipe