import { makeStyles } from '@material-ui/core'
import { Container,Box, Typography,Grid,Paper,TextField,Button} from '@mui/material'
import React from 'react'
import TerminalTwoToneIcon from '@mui/icons-material/TerminalTwoTone';
import Projects_card from '../comp/Projects_card'
import Photos from '../comp/Photo'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SendIcon from '@mui/icons-material/Send';
import '../App.css'


const useStyles=makeStyles({
arrowicon:{
    display:'flex',
    justifyContent:'center',
},
input:{
    display:'flex' ,
    justifyContent:'center'
},

})
export default function Main(props) {
    const classes = useStyles()
  return (
    <Container maxWidth={100}>
        <Box display='flex' marginTop={2}>
            <Typography color='error' marginRight={1}>
                HAMZA OSAILAN
            </Typography>
            <TerminalTwoToneIcon color='error' />
        </Box>
        <Box marginTop={30}>
            <Typography color='error' align='center'>
                Welcom
            </Typography>
        </Box>
        <Box  className={classes.arrowicon} marginTop={2}>
        <KeyboardArrowDownIcon color='error'  />
        </Box>
        <Box marginTop={60}>
        <Typography color='error' >
                About me 
            </Typography>
        </Box>
        <Box>
            <Paper>
            <Typography color='error' align='center' marginTop={3}>
                i'm front end dev...
            </Typography>
            </Paper>
        </Box>
        <Box marginTop={10}>
           <Typography color='error'>
            Projects:
           </Typography> 
        </Box>

        <Grid spacing={1} container>
        <Grid item xs={4}>
        <Projects_card/>
        </Grid>
        <Grid item xs={4}>
        <Projects_card/>
        </Grid>
        <Grid item xs={4}>
        <Projects_card/>
        </Grid>
        
    </Grid>
    <Box marginTop={30}>
        <Typography color='red'>
        programming language
        </Typography>
    </Box>
   
 
    <Grid container spacing={1} align='center'>
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
 
    <Box>
        <Typography color='error'>
            Contact me
        </Typography>
    </Box>
    <form>
  <Box className={classes.input}>
  <TextField id="outlined-basic" label="Name" variant="outlined" />
  </Box>
  <Box className={classes.input} marginTop={2}>
  <TextField id="outlined-basic" label="Name" variant="outlined" />
  </Box>
  <Box className={classes.input} marginTop={2}>
  <TextField id="outlined-basic" label="Massage" variant="outlined" />
  </Box>
  <Box className={classes.input} marginTop={2}>
  <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </Box>
  </form>

  <Box align='center' marginTop={4}>
    <Button size='small' href='www.linkedin.com/in/hamza-osailan'>
        <img width={20}  src='https://logospng.org/download/linkedin/logo-linkedin-icon-512.png'/>
    </Button>

    <Button  href='https://github.com/' size='small'>
    <img width={20} src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol-700x394.png' />
    </Button>
  </Box>
    </Container>
  )
}
