/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import './GrupoComponent.scss';

import CriarGrupo from './CriarGrupo/CriarGrupo';
import SelecionarGrupo from './SelecionarGrupo/SelecionarGrupo';

function GrupoComponent() {
  const [tela, setTela] = useState('grupo');


  function mudarTela() {
    switch (tela) {
      case 'novo_grupo':
        return <CriarGrupo setTela={setTela}></CriarGrupo>
      default:
          return <SelecionarGrupo setTela={setTela}></SelecionarGrupo>
    }
  }
  
  return <>  
    <div className='card-grupo'>
      { mudarTela() }
    </div>
  </>
}

export default GrupoComponent;