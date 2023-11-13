import { useState } from 'react';
import './login.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography, Container } from '@mui/material';

const Login = () => {
  // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event) => { 
    event.preventDefault();
    
    {/**Aqui você pode adicionar lógica para autenticação
    EXEMPLO

    const data = axios.post('ENDPOINT_DA_SUA_API', {
      username: username,
      password: password
    }) 

    if(data){
      navigate('/');
    } else {
      console.log("Erro ao logar");
    }

  */}

    navigate('/tela2');

  };

  return (
    <Container component="main" maxWidth="xs" className="login-container">
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Usuário"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Entrar
        </Button>
      </Box>
    </Box>
  </Container>
  );
}

export default Login;
