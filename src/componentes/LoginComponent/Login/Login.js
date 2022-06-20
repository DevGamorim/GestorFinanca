/* eslint-disable no-restricted-globals */
import React, { useContext, useState } from 'react';
import './Login.scss';
import { TextField } from '@mui/material';
import Botao from '../../utils/Botao/Botao';
import { autenticar } from '../../../services/usuario-service';
import { useNavigate }  from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';

function Login(props) {
  const [login, setLogin] = useState({login: '', senha: ''});
  const navigate = useNavigate();

  const context = useContext(AuthContext);

  function changeValueHandler (form, event) {
    setLogin({ ...login, [form]: event.target.value})
  }

  async function loginHandler() {
    console.log('logar');
    await autenticar(login).then((value) => {
      if (value.data) {
        localStorage.setItem('logged', JSON.stringify(value.data));
        context.setLogged(true);
        navigate("../home");
      }
    });
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
        value={login.login}
        autoComplete='off'
        spellCheck='false'
        onChange={changeValueHandler.bind(this, 'login')}>
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