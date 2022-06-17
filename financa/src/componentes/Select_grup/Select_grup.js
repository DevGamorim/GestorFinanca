

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import View_grup from '../View_grup/View_grup';

const Select_grup = () =>(
  <div className="container">
    <center><p>Seus Grupos</p></center>
    <p className='col-sm-3'>Criar novo grupo (adicionar icone de +)</p>    
    <View_grup />
  </div>
);
  
export default Select_grup;