import React from 'react';
import VisualizarGrupo from '../VisualizarGrupo/VisualizarGrupo';
import './SelecionarGrupo.scss'

function SelecionarGrupo(props) {

  function CriarNovoGrupo() {
    console.log('Criar Novo Grupo');
    props.setTela('novo_grupo');
    /** Mudar par anovo grupo */
  }

  return <div className='projetos'>
    <p className="link novo-projeto" onClick={() => {CriarNovoGrupo()}}>Criar Novo Projeto</p>
    <VisualizarGrupo />
  </div>
};
  
export default SelecionarGrupo;