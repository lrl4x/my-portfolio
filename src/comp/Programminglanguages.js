import React from 'react'
import {Box,Typography,Grid} from '@mui/material'
import logo from '../logo.png'
import { makeStyles} from '@material-ui/core'
import { motion } from "framer-motion"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const theme = createTheme({
  typography: {
    fontFamily:
      'Dancing Script',
  },
  palette: {
    primary: {
      main: '#a9a9a9',
    },
  },
});


const useStyles = makeStyles({
  arrowicon: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
  },
  Typography: {
    color: '#a9a9a9'

  },
  Page:{
    height:'100vh',
    minheight:'100vh',
  
  },
})


export default function Programminglanguages() {
    const classes = useStyles()

  return (
    <section className={classes.Page}>
        <Box 
        marginTop={10} 
        height={100}
         component={motion.div}
         initial={{ y: -100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         Transition={{
           type: "spring", bounce: 0.4, duration: 1, StaggerChildren:0.5
         }}
        >
          <Typography className={classes.Typography} variant='h4'>
<<<<<<< HEAD
       PROGRAMMING LANGUAGES
=======
            programming languages
>>>>>>> a0ab37fbc6006fb4a38feeba808f91e7dab7e3db
          </Typography>
        </Box>


<<<<<<< HEAD
        <Grid container spacing={1} align='center' marginTop={3}
=======
        <Grid container spacing={1} align='center' marginTop={10}
>>>>>>> a0ab37fbc6006fb4a38feeba808f91e7dab7e3db
       component={motion.div}
       initial={{ y: -100, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       Transition={{
         type: "spring", bounce: 0.4, duration: 1, StaggerChildren:0.5
       }}

        >
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://www.pinclipart.com/picdir/big/102-1024697_related-wallpapers-node-js-logo-png-clipart.png'alt='' width={70} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://cdn.iconscout.com/icon/free/png-256/css-118-569410.png' width={70} alt='' />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://th.bing.com/th/id/R.2395ce87da3f91b4cdb179ec21ce7768?rik=9742j907NCeMAw&pid=ImgRaw&r=0' width={70} alt=''/>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol-700x394.png' width={70} alt=''/>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://andrejgajdos.com/wp-content/uploads/2019/11/npm-logo.png?x24361' width={70} alt=''/>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png' width={70} alt=''/>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://objectpartners.com/wp-content/uploads/2015/02/mongodb-logo.png' width={70} alt=''/>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://logospng.org/download/html-5/logo-html-5-1024.png' width={70} alt=''/>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png' width={150} alt=''/>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://logospng.org/download/laravel/logo-laravel-icon-1024.png' width={70} alt=''/>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png' width={70} alt=''/>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://jafs.es/wp-content/uploads/2020/06/react.png' width={70} alt=''/>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <img src='https://th.bing.com/th/id/R.b0d9db2590b5f2ee148edc924ea3bc4d?rik=2%2bz5KkB5GUKoEQ&pid=ImgRaw&r=0' width={70} alt=''/>
          </Grid>
        </Grid>
    </section>
  )
<<<<<<< HEAD
}
=======
}git
>>>>>>> a0ab37fbc6006fb4a38feeba808f91e7dab7e3db
