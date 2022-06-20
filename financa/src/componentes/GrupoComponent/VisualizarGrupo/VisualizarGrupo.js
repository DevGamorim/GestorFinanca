import React, { useEffect, useState } from 'react';
import './VisualizarGrupo.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { CardActions, CardMedia, Typography } from '@mui/material';
import Botao from '../../utils/Botao/Botao';
import { buscarProjetosPorUsuarioId } from '../../../services/projeto-service';
import CardProjeto from '../CardProjeto/CardProjeto';

function VisualizarGrupo(props) {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('logged'));
    buscarProjetosPorUsuarioId(usuario.id).then((value) => {
      setProjetos(value.data);
    })
  }, []);

  return <div className='visualizador-projetos'>
    <h1 className='titulo'>SEUS PROJETOS</h1>
    <div className='grupo-cards'>
      {
        projetos.map((projeto) => {
          return <div className='card'><CardProjeto projeto={projeto}></CardProjeto></div>
        })
      }
    </div>
  </div>
}
 
export default VisualizarGrupo;