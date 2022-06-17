/* eslint-disable no-restricted-globals */
import React from 'react';
import './CriarConta.scss';
import Botao from '../../utils/Botao/Botao';

function CriarConta(props) {
  function voltar() {
    props.setTela('login');
  }

  return <>
    <Botao className='botao-voltar' onClick={voltar}>
      Voltar
    </Botao>
  </>
}

export default CriarConta;