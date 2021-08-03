import React from "react";
import {Typography} from "@material-ui/core";

const RecipeInfoCard = ({label, value}) => {
  return (<div>
    <Typography variant='caption'>{label}</Typography>
    <Typography>{value}</Typography>
  </div>)
}

export default RecipeInfoCard