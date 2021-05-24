import React from "react";
import {Container, makeStyles} from "@material-ui/core";
import styles from "./styles";

const useStyles = makeStyles(styles)

const BodyCard = (props) => {
  const { children } = props
  const classes = useStyles()

  return (<div className={classes.card}>
    <Container>
      {children}
    </Container>
  </div>)
}

export default BodyCard