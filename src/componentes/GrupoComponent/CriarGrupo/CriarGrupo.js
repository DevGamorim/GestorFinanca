/* eslint-disable no-restricted-globals */
import React from 'react';
import './CriarGrupo.scss';
import Botao from '../../utils/Botao/Botao';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate }  from 'react-router-dom';
import { criarProjeto } from '../../../services/projeto-service';

function CriarGrupo() {
    const [projeto, setProjeto] = useState({titulo: '', saldo: 0, descricao: '', imagem: '', membros: []});

    const navigate = useNavigate();

    function voltar() {
        navigate('../home')
    }

    function cadastrar() {
        const usuario = JSON.parse(localStorage.getItem('logged'));
        projeto.membros.push(usuario);
        criarProjeto(projeto).then(() => {
            navigate('../home')
        });
    }

    function changeValueHandler(form, event) {
        setProjeto({ ...projeto, [form]: event.target.value})
    }

    return <div className='card-grupo'>
        <div className='tela'>
            <div className='card-criar-grupo'>
                <TextField
                    type={'text'}
                    label='TÍTULO'
                    value={projeto.titulo}
                    autoComplete='off'
                    spellCheck='false'
                    onChange={changeValueHandler.bind(this, 'titulo')}
                    className='titulo-text'
                    size='small'>
                </TextField>
                <TextField
                    type={'text'}
                    label='DESCRIÇÃO'
                    value={projeto.descricao}
                    autoComplete='off'
                    spellCheck='false'
                    onChange={changeValueHandler.bind(this, 'descricao')}
                    className='titulo-text'
                    size='small'>
                </TextField>
                <TextField
                    type={'text'}
                    label='IMAGEM'
                    value={projeto.imagem}
                    autoComplete='off'
                    spellCheck='false'
                    onChange={changeValueHandler.bind(this, 'imagem')}
                    className='titulo-text'
                    size='small'>
                </TextField>
            </div>
            <div className='botoes'>
            <Botao size='small' className='botao' onClick={voltar}>
                Voltar
            </Botao>
            <Botao size='small' className='botao' onClick={cadastrar}>
                <AiOutlineArrowRight></AiOutlineArrowRight>
            </Botao>
            </div>
        </div>
    </div>
}

export default CriarGrupo;