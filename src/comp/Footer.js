import React from 'react'
import {  Box, Typography  } from '@mui/material'
import { makeStyles} from '@material-ui/core'
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


export default function Contactme() {
    const classes = useStyles()
  return (
    <section>
    <Box sx={{ bgcolor: 'black', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom className={classes.Typography}>
    Powered by  Hamza osailan 
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      component="p"
      className={classes.Typography}
    >
      {'Copyright © '}2022
    </Typography>
  </Box>
  </section>
  )
}