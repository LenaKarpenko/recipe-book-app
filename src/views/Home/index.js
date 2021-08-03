import React from "react";
import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import BodyCard from "../../components/Cards/BodyCard";
import MenuCard from "../../components/Cards/MenuCard";
import styles from "./styles";
import ImgAvatar from '../../assets/img-avatar.jpg'

const useStyles = makeStyles(styles)

const menus = [
  'recipes', 'chats', 'networks', 'friends', 'favourites', 'uploads'
]

const Home = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleMenuClick = (e) => {
    e.preventDefault()
    history.push('/recipes')
  }

  return (
    <Box className={classes.pageBackground}
         display='flex'
         flexDirection='column'>
      <Container>
        <Box display='flex'
             pt={5}
             pb={5}
             flexDirection='row'
             justifyContent='space-between'
             alignItems='center'>
          <Typography variant='h2' component='h2'>Welcome David</Typography>
          <img src={ImgAvatar} alt='Avatar' className={classes.avatar}/>
        </Box>
      </Container>
      <BodyCard>
        <Grid container
              direction="row"
              alignItems='center'
              justify='space-evenly'
              spacing={3}>
          {menus.map(menu => (
            <Grid item  key={menu}>
              <MenuCard type={menu} handleClick={handleMenuClick}/>
            </Grid>
          ))}
        </Grid>
      </BodyCard>
  </Box>)
}

export default Home