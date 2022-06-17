import React from 'react';
import './Botao.scss';
import { Button } from '@mui/material';  

function Botao(props) {
  return <>
    <Button
      variant='contained'
      size={props.size || 'medium'}
      className={ props.className } 
      style={{
          borderRadius: 10,
          backgroundColor: "#2EA690",
          padding: "18px 36px",
          fontSize: "14px"
      }}
      onClick={props.onClick}>
        { props.children  }
    </Button>
  </>
}

export default Botao;