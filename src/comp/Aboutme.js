import React from 'react'
import {Box,Typography} from '@mui/material'
import logo from '../logo.png'
import { motion } from "framer-motion"
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
  
export default function Aboutme() {
    const classes = useStyles()
  return (
    <section className={classes.Page}>
    <Box 
    marginTop={10}
    component={motion.div}
    initial={{ y: -100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    Transition={{
      type: "spring", bounce: 0.4, duration: 1, StaggerChildren:0.5
    }}
    >
      <Typography className={classes.Typography} variant='h4'>
        ABOUT ME
      </Typography>
    </Box>

    <Box 
     component={motion.div}
     initial={{ y: -100, opacity: 0 }}
     whileInView={{ y: 0, opacity: 1 }}
     Transition={{
       type: "spring", bounce: 0.4, duration: 3, StaggerChildren:0.5
     }}
    >
       
      <Typography  align='left' marginTop={3} variant='h5'>
      My name is Hamza Najeeb Osailan I'm a full-stack developer and software engineer who enjoys working with all types of personalities. Seeking a chance to architect new software applications. A determined and knowledgeable software developer who can think outside the box. Focused, results-driven, and knowledgeable in multiple computer languages
      </Typography>

    </Box>
    </section>
  )
}
