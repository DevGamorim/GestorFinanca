/* eslint-disable no-restricted-globals */
import React, { useContext, useState } from 'react';
import './CriarConta.scss';
import Botao from '../../utils/Botao/Botao';
import { criarConta } from '../../../services/usuario-service';
import { TextField } from '@mui/material';
import AuthContext from '../../../context/AuthContext';

function CriarConta(props) {
  const [login, setLogin] = useState({login: '', email: '', cpf: '', nome: '', senha: ''});

  const context = useContext(AuthContext);

  function changeValueHandler (form, event) {
    setLogin({ ...login, [form]: event.target.value})
  }

  async function cadastrarHandler() {
    criarConta(login)
    .then(() => {
      context.setToast({open: true, mensagem: 'Cadastrado com sucesso!', sucesso: true});
      props.setTela('login');
    })
    .catch((error) => {
      console.error(error);
    })
  }

  function voltar() {
    props.setTela('login');
  }

  return <div className='wrapper'>
    <p className='titulo'>CADASTRAR</p>
    <div className='campos'>
      <TextField
        size='small'
        className='field'
        type={'text'}
        label='NOME'
        value={login.nome}
        autoComplete='off'
        spellCheck='false'
        required={true}
        onChange={changeValueHandler.bind(this, 'nome')}>
      </TextField>
      <TextField
        size='small'
        className='field'
        type={'text'}
        label='CPF'
        value={login.cpf}
        autoComplete='off'
        spellCheck='false'
        required={true}
        onChange={changeValueHandler.bind(this, 'cpf')}>
      </TextField>
      <TextField
        size='small'
        className='field'
        type={'text'}
        label='EMAIL'
        value={login.email}
        autoComplete='off'
        spellCheck='false'
        required={true}
        onChange={changeValueHandler.bind(this, 'email')}>
      </TextField>
      <TextField
        size='small'
        className='field'
        type={'text'}
        label='LOGIN'
        value={login.login}
        autoComplete='off'
        spellCheck='false'
        required={true}
        onChange={changeValueHandler.bind(this, 'login')}>
      </TextField>
      <TextField
        size='small'
        className='field'
        type={'password'}
        label='SENHA'
        value={login.senha}
        required={true}
        onChange={changeValueHandler.bind(this, 'senha')}>
      </TextField>
    </div>
    <div className='botoes'>
      <Botao size='small' onClick={voltar}>
        Voltar
      </Botao>
      <Botao size='small' onClick={cadastrarHandler}>
        Cadastrar
      </Botao>
    </div>
  </div>
}
export default CriarConta;