import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Row, Col } from 'react-bootstrap';

import VisualizarGrupo from '../VisualizarGrupo/VisualizarGrupo';

function SelecionarGrupo(props) {

  function CriarNovoGrupo() {
    console.log('Criar Novo Grupo');
    props.setTela('novo_grupo');
    /** Mudar par anovo grupo */
  }

  return <>
  <Container>
    <Row>      
      <center><p>Seus Grupos</p></center>
      <p className="link" onClick={() => {CriarNovoGrupo()}}>Criar novo grupo</p>
      <p></p>
    </Row>
    <VisualizarGrupo />
  </Container>
  </>
};
  
export default SelecionarGrupo;