import { makeStyles ,InputBase } from '@material-ui/core'
import { Container,Box, Typography,Grid,TextField,Button,Stack} from '@mui/material'
import React from 'react'
import TerminalTwoToneIcon from '@mui/icons-material/TerminalTwoTone';
import Projects_card from '../comp/Projects_card'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SendIcon from '@mui/icons-material/Send';
import '../App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const color = "red";
const useStyles=makeStyles({
  
arrowicon:{
    display:'flex',
    justifyContent:'center',
},
input:{
    display:'flex' ,
    justifyContent:'center',
},
Typography:{
  color:'#a9a9a9'
},
TextField:{
  borderWidth: "1px",
    borderColor: "yellow !important"
}
})
export default function Main(props) {
    const classes = useStyles()
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  return (
    <Container maxWidth={100}>
       <ThemeProvider theme={theme}>
        <Box display='flex' marginTop={2}>
            <Typography  marginRight={1} className={classes.Typography} variant='h5'>
                HAMZA OSAILAN
            </Typography>
            <TerminalTwoToneIcon  className={classes.Typography}/>
        </Box>
        <Box marginTop={35}>
            <Typography className={classes.Typography}  align='center' variant='h1'>
                Welcom
            </Typography>
        </Box>
        <Box  className={classes.arrowicon} marginTop={2}>
        <KeyboardArrowDownIcon className={classes.Typography} />
        </Box>
        <Box marginTop={60}>
        <Typography className={classes.Typography} variant='h4'>
                About me 
            </Typography>
        </Box>
        <Box marginTop={10}>
            <Typography className={classes.Typography}  align='center' marginTop={3} variant='h5'>
                i'm front end dev...
            </Typography>
          
        </Box>
        <Box marginTop={70}>
           <Typography className={classes.Typography} variant='h4'>
            Projects:
           </Typography> 
        </Box>

        <Grid spacing={1} container marginTop={10}>
        
        <Grid item xs={4}>
        <Projects_card name='TreeCourse' image='' alt='TreeCourseImage' height="140" component="img" btn='share' dsc='In this project, we analyze designed and analysis application for giving solution of problem and can we solve this solution the problem is how students can find courses on one web/mobile application instead of multiple web/mobile application.'/>
        </Grid>
        <Grid item xs={4}>
        <Projects_card name='PlantsWorld' image='tr.png' alt='PlantsWorld'  height="140" component="img" btn='share' dsc='plantsworld is web page talking about the types of plants '/>
        </Grid>
        <Grid item xs={4}>
        <Projects_card name='' image='tr.png' alt='PlantsWorld'  height="140" component="img" btn='share' dsc=''/>
        </Grid>
        
    </Grid>
    <Box marginTop={30}>
        <Typography className={classes.Typography} variant='h4'>
        programming languages
        </Typography>
    </Box>
   
 
    <Grid container spacing={1} align='center' marginTop={10}>
      <Grid item xs={6} md={4} lg={2}>
        <img src='https://www.pinclipart.com/picdir/big/102-1024697_related-wallpapers-node-js-logo-png-clipart.png' width={70}/>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
        <img src='https://cdn.iconscout.com/icon/free/png-256/css-118-569410.png' width={70}/>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
      <img src='https://th.bing.com/th/id/R.2395ce87da3f91b4cdb179ec21ce7768?rik=9742j907NCeMAw&pid=ImgRaw&r=0' width={70}/>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
      <img src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol-700x394.png' width={70}/>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
      <img src='https://andrejgajdos.com/wp-content/uploads/2019/11/npm-logo.png?x24361' width={70}/>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
      <img src='https://desarrollador-android.com/wp-content/uploads/2015/03/android_studio_logo-1024x1024.png' width={70}/>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
      <img src='https://objectpartners.com/wp-content/uploads/2015/02/mongodb-logo.png' width={70}/>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
      <img src='https://logospng.org/download/html-5/logo-html-5-1024.png' width={70}/>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
      <img src='https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png' width={150}/>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
      <img src='https://pixlok.com/wp-content/uploads/2021/05/flutter-logo.jpg' width={70}/>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
      <img src='https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png' width={70}/>
      </Grid>
      <Grid item xs={6} md={4} lg={2}>
      <img src='https://jafs.es/wp-content/uploads/2020/06/react.png' width={70}/>
      </Grid>
    </Grid>
 
    <Box marginTop={37}>
        <Typography  className={classes.Typography} variant='h4'>
            Contact me
        </Typography>
    </Box>
    <Stack  
      mt={10}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      component="form"
      noValidate
     autoComplete="off" 
     >
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
      <TextField fullWidth id="standard-multiline-flexible" label="Massage" multiline maxRows={6} value={value} onChange={handleChange} variant="outlined"/>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>

  <Box align='center' marginTop={4} marginBottom={2}>
    <Button size='small' href='www.linkedin.com/in/hamza-osailan'>
        <img width={20}  src='https://logospng.org/download/linkedin/logo-linkedin-icon-512.png'/>
    </Button>

    <Button  href='https://github.com/' size='small'>
    <img width={20} src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol-700x394.png' />
    </Button>
  </Box>
  </ThemeProvider>
    </Container>
  )
}
