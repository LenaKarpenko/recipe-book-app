import React from "react";
import {makeStyles} from "@material-ui/core";
import styles from "./styles";

const useStyles = makeStyles(styles)

const Tag = (props) => {
  const {label} = props
  const classes = useStyles()

  return (<div className={classes.tag}>
    <span>{label}</span>
  </div>)
}

export default Tag