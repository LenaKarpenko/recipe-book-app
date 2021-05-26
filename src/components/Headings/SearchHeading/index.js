import React from "react";
import {Container, Grid, IconButton, InputBase, makeStyles, Paper, Typography} from "@material-ui/core";
import {ReactComponent as Arrow} from './../../../assets/icon-arrow.svg'
import {ReactComponent as Search} from './../../../assets/icon-search.svg';
import styles from "./styles";

const useStyles = makeStyles(styles)

const SearchHeading = (props) => {
  const {handleBackClick} = props
  const classes = useStyles()

  return (
    <Container>
      <IconButton aria-label='Go back'
                  size='small'
                  onClick={handleBackClick}
                  className={[classes["mb-3"], classes["mt-4"]].join(' ')}>
        <Arrow/>
      </IconButton>
      <Grid container
            className={classes["mb-5"]}
            direction="row"
            alignItems='center'
            justify='space-between'>
        <Typography variant='h2'
                    component='h2'
                    className={[classes.h2, classes["mb-1"]].join(' ')}
        >Search by Recipe</Typography>
        <Paper component='form' className={classes.searchBtnRoot}>
          <InputBase placeholder='What recipe are you looking for?'
                     inputProps={{ 'aria-label': 'what recipe are you looking for' }}/>
          <Search/>
        </Paper>
      </Grid>
    </Container>)
}

export default SearchHeading