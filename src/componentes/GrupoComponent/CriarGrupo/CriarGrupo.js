/* eslint-disable no-restricted-globals */
import React from 'react';
import './CriarGrupo.scss';
import Botao from '../../utils/Botao/Botao';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { AiOutlineArrowRight } from 'react-icons/ai'

function CriarGrupo(props) {
    const [email1, setEmail1, email2, setEmail2, email3, setEmail3, text, setText] = useState('');

    function voltar() {
        props.setTela('grupo');
    }

    function changeValueHandler(event) {
        setEmail1(event.target.value);
        setEmail2(event.target.value);
        setEmail3(event.target.value);
        setText(event.target.value);
    }

    return <>
        <div className='card-criar-grupo'>
            <div className='titulo'>
                <TextField
                    type={'text'}
                    label='Titulo'
                    value={text}
                    autoComplete='off'
                    spellCheck='false'
                    onChange={changeValueHandler}
                    className='titulo-text'
                    size='small'>
                </TextField>
            </div>
            <div className='e-mail'>
                <TextField
                    type={'text'}
                    label='E-MAIL 1'
                    value={email1}
                    autoComplete='off'
                    spellCheck='false'
                    onChange={changeValueHandler}
                    className='email-text'
                    size='small'>
                </TextField>
            </div>
            <div className='e-mail'>
                <TextField
                    type={'text'}
                    label='E-MAIL 2'
                    value={email2}
                    autoComplete='off'
                    spellCheck='false'
                    onChange={changeValueHandler}
                    className='email-text'
                    size='small'>
                </TextField>
            </div>
            <div className='e-mail'>
                <TextField
                    type={'text'}
                    label='E-MAIL 3'
                    value={email3}
                    autoComplete='off'
                    spellCheck='false'
                    onChange={changeValueHandler}
                    className='email-text'
                    size='small'>
                </TextField>
            </div>
            <Botao size='small' className='botao-icone' onClick={voltar}>
                <AiOutlineArrowRight></AiOutlineArrowRight>
            </Botao>
        </div>
        <Botao size='small' className='botao-voltar' onClick={voltar}>
            Voltar
        </Botao>
    </>
}

export default CriarGrupo;