import React, { useEffect, useState } from 'react';
import './VisualizarGrupo.scss';

import { buscarProjetosPorUsuarioId } from '../../../services/projeto-service';
import CardProjeto from '../CardProjeto/CardProjeto';
import { useNavigate }  from 'react-router-dom';

function VisualizarGrupo(props) {
  const [projetos, setProjetos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('logged'));
    buscarProjetosPorUsuarioId(usuario.id).then((value) => {
      setProjetos(value.data);
    })
  }, []);

  function CriarNovoGrupo() {
    navigate("../criar-projeto");
  }

  return <div className='card-grupo'>
    <div className='novo-projeto'>
      <p className="link" onClick={() => {CriarNovoGrupo()}}>Criar Novo Projeto</p>
    </div>
    <div className='visualizador-projetos'>
      <h1 className='titulo'>SEUS PROJETOS</h1>
      <div className='grupo-cards'>
        {
          projetos.map((projeto) => {
            return <div className='card'><CardProjeto projeto={projeto}></CardProjeto></div>
          })
        }
      </div>
    </div>
  </div>
}
 
export default VisualizarGrupo;