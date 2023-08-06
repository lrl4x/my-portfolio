import React from 'react'
import {Box,Typography,Grid} from '@mui/material'
import { makeStyles} from '@material-ui/core'
import { motion } from "framer-motion"
import Card1 from '../comp/Card1'
import tr from '../tr.png'
import PLOGO from '../PLOGO.png'

  
  const useStyles = makeStyles({
    Typography: {
      color: '#a9a9a9',
    },
    arrowicon: {
      display: 'flex',
      justifyContent: 'center',
    },
  
  })
  
export default function Projects() {
    const classes = useStyles()

  return (
    <section >
    <Box
         component={motion.div}
         initial={{ y: -100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         Transition={{
           type: "spring", bounce: 0.4, duration: 3, StaggerChildren:0.5
         }}
        >
          <Typography className={classes.Typography} variant='h4'>
            PROJECTS
          </Typography>
        </Box>

        <Grid spacing={1} align='center' container marginTop={3} 
         rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
         component={motion.div}
         initial={{ y: -100, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       Transition={{
         type: "spring", bounce: 0.4, duration: 1, StaggerChildren:0.5
       }}
        >
          <Grid item xs={6} md={4} lg={2}>
            <Card1 name='TreeCourse' image={tr} alt='TreeCourseImage' height="140" component="img" btn='Details' dsc='In this project, we analyze designed and analysis application for giving solution of problem and can we solve this solution the problem is how students can find courses on one web/mobile application instead of multiple web/mobile application.' />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Card1 name='CAR WHEEL' image={PLOGO} alt='CAR WHEEL' height="140" component="img" btn='Details' dsc='CAR WHEEL Saudi Arabia is the first step for anyone looking for a car in Saudi Arabia. It offers a huge variety of used and new cars for sale that are listed by individual sellers and dealers. You can easily and directly contact the seller and also sell your car for free, without any commission. You can also search for car availability on auction, lease transfer and reduced price cars sections.' />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Card1 name='' image='tr.png' alt='unkowun' height="140" component="img" btn='Details' dsc='' />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Card1 name='' image='tr.png' alt='unkowun' height="140" component="img" btn='Details' dsc='' />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Card1 name='' image='tr.png' alt='unkowun' height="140" component="img" btn='Details' dsc='' />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Card1 name='' image='tr.png' alt='unkowun' height="140" component="img" btn='Details' dsc='' />
          </Grid>
        </Grid>
        </section>
  )
}
