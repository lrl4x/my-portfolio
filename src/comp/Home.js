import React from 'react'
import {Box,Typography} from '@mui/material'
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



export default function Nav() {
  const classes = useStyles()

  return (
    <section className={classes.Page}>
        <ThemeProvider theme={theme}>

      <img src={logo}/>
      <Box marginTop={20}>
          <Typography className={classes.Typography} align='center' variant='h1'
            component={motion.div}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            Transition={{
              type: "spring", bounce: 0.4, duration: 3, StaggerChildren:0.5
            }}
          >
            WELCOME
          </Typography>
        </Box>

        
        </ThemeProvider>
    </section>
  )
}
