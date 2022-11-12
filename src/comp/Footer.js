import React from 'react'
import { Container, Box, Typography, TextField, Button, Stack } from '@mui/material'
import { makeStyles} from '@material-ui/core'
import { motion } from "framer-motion"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

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
 
})


export default function Footer() {
    const classes = useStyles()
    const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <section claasName={classes.Page}>
        <Box 
         component={motion.div}
         initial={{ y: -100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         Transition={{
           type: "spring", bounce: 0.4, duration: 3, StaggerChildren:0.5
         }}
        >
          <Typography className={classes.Typography} variant='h4'>
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
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          Transition={{
            type: "spring", bounce: 0.4, duration: 3, StaggerChildren:0.5
          }}
        >
          <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
          <TextField fullWidth id="standard-multiline-flexible" label="Massage" multiline maxRows={6} value={value} onChange={handleChange} variant="outlined" />
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>

        <Box align='center' marginTop={4} marginBottom={2}
         component={motion.div}
         initial={{ y: -100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         Transition={{
           type: "spring", bounce: 0.4, duration: 3, StaggerChildren:0.5
         }}
        >
          <Button size='small' href='www.linkedin.com/in/hamza-osailan'>
            <img width={20} src='https://logospng.org/download/linkedin/logo-linkedin-icon-512.png' alt=''/>
          </Button>

          <Button href='https://github.com/' size='small'>
            <img width={20} src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol-700x394.png' alt=''/>
          </Button>
          
        </Box>
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
