import React, { useEffect, useState } from 'react';
import './Login.scss';
import {TextField} from '@mui/material';  

function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  useEffect(() => {

  }, []);

  return <>
    <div className='pagina'>
      <div className='card-login'>
          <TextField sx={{color: 'success.main'}} className='field' type={'text'} label='USERNAME' value={login | ''} onChange={(event, value) => setLogin(value)}>

          </TextField>
          <TextField className='field' type={'password'} label='PASSWORD' value={senha | ''}>

          </TextField>
      </div>
    </div>
  </>
}

export default Login;