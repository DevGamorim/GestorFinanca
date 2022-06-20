import React from 'react';
import './CardProjeto.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { CardActions, CardMedia, Typography } from '@mui/material';
import Botao from '../../utils/Botao/Botao';

function CardProjeto(props) {
  return <>
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.projeto.imagem}
        alt="imagem"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { props.projeto.titulo }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { props.projeto.descricao }
        </Typography>
      </CardContent>
      <CardActions>
        <Botao size="small">Colaborar</Botao>
      </CardActions>
    </Card>
  </>
}
 
export default CardProjeto;