import React from "react";
import { Typography, Container, TextField, Button, makeStyles, Box } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import styles from "./styles";

const useStyles = makeStyles(styles)

const Login = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleLoginClick = (e) => {
    e.preventDefault()
    history.push('/home')
  }

  return (<div className={classes.logoPageBackground}>
    <Container>
      <Box display='flex'
           flexDirection='column'
           justifyContent='center'
           height='100vh'
           alignItems='center'>
        <div>
          <Typography variant="subtitle1" >Welcome to</Typography>
          <Typography variant="h1" component="h1">Recipe Book</Typography>
        </div>
        <form noValidate>
          <Box display='flex'
               mt={9}
               flexDirection='column'
               justifyContent='center'
               alignItems='center'>
            <TextField className={classes["mb-2"]} label="Email" variant="outlined"/>
            <TextField className={classes["mb-2"]} label="Password" variant='outlined'/>
            <Button variant='contained'
                    color='primary'
                    fullWidth
                    onClick={handleLoginClick}
            >Login</Button>
          </Box>
        </form>
      </Box>
    </Container>
  </div>)
}

export default Login