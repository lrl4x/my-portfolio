import { makeStyles} from '@material-ui/core'
import { Container, CssBaseline  } from '@mui/material'
import React from 'react'
import Home from '../comp/Home'
import Aboutme from '../comp/Aboutme';
import Projects from '../comp/Projects'
import Programminglanguages from '../comp/Programminglanguages'
import Contactme from '../comp/Contactme'
import Footer from '../comp/Footer'
import '../App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';


//themeE
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


//themecss
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
  },
})

export default function Main(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container component="main" maxWidth="xl">
       <CssBaseline />
      <ThemeProvider theme={theme}>
        <Home/>
        <Aboutme/>
        <Projects/>
        <Programminglanguages/>
        <Contactme/>
        <Footer/>
        
      </ThemeProvider>
    </Container>
  )
}
