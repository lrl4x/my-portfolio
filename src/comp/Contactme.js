import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import { makeStyles} from '@material-ui/core'
import { motion } from "framer-motion"
import SendIcon from '@mui/icons-material/Send';
import emailjs  from 'emailjs-com';
import { useState } from 'react';
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


export default function Footer() {
    const classes = useStyles()
    const [name,setname] =useState('')
    const [email,setemail] =useState('')
    const [message,setmessage] =useState('')

    
    
    const sendEmail = (e) => {
      
      e.preventDefault();
      const data = new FormData(e.target);
      console.log({
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),

      });
      emailjs.sendForm('service_tic47fm', 'template_84hpv3o',e.target,'uZDm1gujvzq5arEej')
        .then((result) => {
            console.log(result.text);
            

        }, (error) => {
            console.log(error.text);
        });
         e.target.reset()
         
      }
   
  return (
    <section className={classes.Page}>
        <Box 
         mt={10}
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
          mt={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          component="form"
          onSubmit={sendEmail}
          Validate
          autoComplete="off"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          Transition={{
            type: "spring", bounce: 0.4, duration: 3, StaggerChildren:0.5
          }}
        >
          <TextField name="name" id="name" value={name}  required={true} label="name" variant="outlined" fullWidth type='text' onChange={(e)=>setname(e.target.test)}/>
          <TextField name="email" id="email" value={email}  required={true} label="email" variant="outlined" fullWidth type='email' onChange={(e)=>setemail(e.target.value)}/>
          <TextField name="message" id="message" value={message}  required={true} label="message" variant="outlined" fullWidth type='text' multiline maxRows={6} onChange={(e)=>setmessage(e.target.value)}/>
          <Button variant="contained" type="submit"  endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>

        <Box align='center' marginTop={10} 
         component={motion.div}
         initial={{ y: -100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         Transition={{
           type: "spring", bounce: 0.4, duration: 3, StaggerChildren:0.5
         }}
        >
          <Button size='small' href='https://www.linkedin.com/in/hamza-osailan'>
            <img width={20} src='https://logospng.org/download/linkedin/logo-linkedin-icon-512.png' alt=''/>
          </Button>

          <Button href='https://github.com/lrl4x' size='small'>
            <img width={20} src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol-700x394.png' alt=''/>
          </Button>
          
        </Box>
        
    </section>
  )
        }