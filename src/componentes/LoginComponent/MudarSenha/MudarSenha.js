/* eslint-disable no-restricted-globals */
import React from 'react';
import './MudarSenha.scss';
import Botao from '../../utils/Botao/Botao';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { AiOutlineArrowRight } from 'react-icons/ai'

function MudarSenha(props) {
  const [email, setEmail] = useState('');
  
  function voltar() {
    props.setTela('login');
  }

  function changeValueHandler(event) {
    setEmail(event.target.value);
  }

  return <>
    <div className='card-mudar-senha'>
      <div className='email'>
        <TextField
          type={'text'}
          label='E-MAIL'
          value={email}
          autoComplete='off'
          spellCheck='false'
          onChange={changeValueHandler}
          className='email-text'
          size='small'>

        </TextField>
        <Botao size='small' className='botao-icone' onClick={voltar}>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </Botao>
      </div>
      <Botao size='small' className='botao-voltar' onClick={voltar}>
        Voltar
      </Botao>
    </div>
  </>
}

export default MudarSenha;