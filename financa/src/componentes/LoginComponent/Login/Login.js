/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import './Login.scss';
import { TextField } from '@mui/material';
import Botao from '../../utils/Botao/Botao';

function Login(props) {
  const [login, setLogin] = useState({user: '', senha: ''});

  function changeValueHandler (form, event) {
    setLogin({ ...login, [form]: event.target.value})
  }

  function loginHandler() {
    console.log('logar');
    /** Chamar API */
  }

  function mudarSenhaHandler() {
    console.log('Mudar senha');
    props.setTela('senha');
    /** Mudar tela */
  }

  function criarContaHandler() {
    console.log('Criar conta');
    props.setTela('conta');
    /** Mudar tela */
  }

  return <>
    <p className='titulo'>LOGIN</p>
    <div className='campos'>
      <TextField
        className='field'
        type={'text'}
        label='USERNAME'
        value={login.user}
        autoComplete='off'
        spellCheck='false'
        onChange={changeValueHandler.bind(this, 'user')}>
      </TextField>
      <TextField
        className='field'
        type={'password'}
        label='PASSWORD'
        value={login.senha}
        onChange={changeValueHandler.bind(this, 'senha')}>
      </TextField>
    </div>
    <p className="link" onClick={() => {mudarSenhaHandler()}}>Esqueci minha senha</p>
    <p className="link" onClick={() => {criarContaHandler()}}>Crie uma conta</p>
    <Botao onClick={loginHandler}>
      Login
    </Botao>
  </>
}

export default Login;