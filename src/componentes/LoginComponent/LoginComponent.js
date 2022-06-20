/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import './LoginComponent.scss';
import Login from './Login/Login';
import CriarConta from './CriarConta/CriarConta';
import MudarSenha from './MudarSenha/MudarSenha';

function LoginComponent() {
  const [tela, setTela] = useState('login');

  function mudarTela() {
    switch (tela) {
      case 'conta':
        return <CriarConta setTela={setTela}></CriarConta>
      case 'senha':
        return <MudarSenha setTela={setTela}></MudarSenha>
      default:
        return <Login setTela={setTela}></Login>
    }
  }
  
  return <>  
    <div className='card-login'>
      { mudarTela() }
    </div>
  </>
}

export default LoginComponent;