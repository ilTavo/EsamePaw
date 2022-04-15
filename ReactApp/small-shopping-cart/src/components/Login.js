import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Alert from '@mui/material/Alert';
import axios from 'axios';


export default function Login() {
  const [open, setOpen] = React.useState(false);
  return (
    <Container maxWidth="sm" align="center">
      
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '80%' },
      }}
      noValidate
      autoComplete="off"
    >
      <BeachAccessIcon fontSize="large"></BeachAccessIcon>
      <h2>LOGIN</h2>   
      <TextField id="username" label="Username" variant="outlined" />
      <TextField id="password" label="password" type="password" variant="outlined" />      
      <Button  onClick ={logs}
         variant="outlined" 
        size='large' >LOGIN</Button>    
      
    </Box>
    {open === true ? (
    <Alert severity="error">Credenziali errate!</Alert>
  ) : (
    <span ></span>
  )}
   
    </Container>

  );
  async function logs() {  

    axios.post('http://127.0.0.1:8000/api/token/auth/', {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
    .then(function (response) {
      console.log('response '+response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('note', response.data.note);
      localStorage.setItem('reset', response.data.fine_prenot);
      localStorage.setItem('nome', response.data.user_id);
      localStorage.setItem('staff', response.data.is_staff);
      //console.log ('local token  '+localStorage.getItem('token')+'-nroOmb-'+response.data.omb+'finepreno'+response.data.fine_prenot+'nome'+response.data.user_id);
      window.location.reload(true);
    }) .catch(function(error) {
      setOpen(true);
    })
    
  }
  
}
