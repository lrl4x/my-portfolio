import { Container } from '@mui/material'
import React from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core'
import Main from '../src/pages/Main'
const useStyle=makeStyles()
export default function App() {
  
  const classes=useStyle({
    backg:{
      
    }
  });


  return (
    <Container >
      <Main/>
     </Container>
  )
}
