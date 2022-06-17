import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import View_grup from './View_grup/View_grup.js';

const select_grup = () =>(
  <div className="container">
    <center><p>Seus Grupos</p></center>    
    <p>Criar novo grupo (adicionar icone de +)</p>
    
    <div className="row">
      <View_grup />
    </div>

  </div>
);
  
export default select_grup;