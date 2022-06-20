/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import './CriarConta.scss';
import Botao from '../../utils/Botao/Botao';
import { criarConta } from '../../../services/usuario-service';
import { Snackbar, TextField } from '@mui/material';

function CriarConta(props) {
  const [login, setLogin] = useState({login: '', email: '', cpf: '', nome: '', senha: ''});
  const [open, setOpen] = useState(false)
  function changeValueHandler (form, event) {
    setLogin({ ...login, [form]: event.target.value})
  }

  async function cadastrarHandler() {
    criarConta(login)
    .then((value) => {
      console.log(value.data);
      setOpen(true);
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
        required='true'
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
        required='true'
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
        required='true'
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
        required='true'
        onChange={changeValueHandler.bind(this, 'login')}>
      </TextField>
      <TextField
        size='small'
        className='field'
        type={'password'}
        label='SENHA'
        value={login.senha}
        required='true'
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
    <Snackbar
      // eslint-disable-next-line no-sequences
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      open={open}
      message="Cadastrado com sucesso!"
      autoHideDuration={6000}
    />
  </div>
}
export default CriarConta;