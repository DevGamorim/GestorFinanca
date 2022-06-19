import React, { useState } from 'react';
import './VisualizarGrupo.scss';

import parse from 'html-react-parser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Popup from './Popup';

function VisualizarGrupo(props) {

  var aaa = [{"nome_grupo":"Formatura",
  "integrantes":["Fernando Amorim","Mateus Coimbra"],
  "valor_de_caixa": 6000.00,
  "finanças":[{"descrição":"Viagem",
      "criador":"Fernando Amorim",
      "tipo":"saida",
      "valor": 3000,
      "data_ciacao":"17/06/2022",
      "hora_criacao":"12:01"},
    {"descrição":"Decoração",
      "criador":"Fernando Amorim",
      "tipo":"saida",
      "valor": 5000,
      "data_ciacao":"18/06/2022",
      "hora_criacao":"10:35"},
    {"descrição":"Brigadeiros",
      "criador":"Mateus Coimbra",
      "tipo":"entrada",
      "valor": 2000,
      "data_ciacao":"19/06/2022",
      "hora_criacao":"22:40"},
    {"descrição":"Doações",
      "criador":"Fernando Amorim",
      "tipo":"entrada",
      "valor": 12000,
      "data_ciacao":"20/06/2022",
      "hora_criacao":"01:27"}]},
  {"nome_grupo":"Casa",
    "integrantes":["Fernando Amorim","Paulo Fernando"],
    "valor_de_caixa": 2000,
    "finanças":[{"descrição":"Mercado",
      "criador":"Paulo Fernando",
      "tipo":"saida",
      "valor": 750,
      "data_ciacao":"15/06/2022",
      "hora_criacao":"18:01"},
      {"descrição":"Salario fernando",
      "criador":"Fernando Amorim",
      "tipo":"entrada",
      "valor": 4850.75,
      "data_ciacao":"15/06/2022",
      "hora_criacao":"08:30"},
      {"descrição":"Salarario Paulo",
      "criador":"Paulo Fernando",
      "tipo":"entrada",
      "valor": 5870.45,
      "data_ciacao":"16/06/2022",
      "hora_criacao":"17:45"},
      {"descrição":"Prestação Apartamento",
      "criador":"Paulo Fernando",
      "tipo":"saida",
      "valor": 1200.00,
      "data_ciacao":"18/06/2022",
      "hora_criacao":"17:45"},
      {"descrição":"Condominio",
      "criador":"Paulo Fernando",
      "tipo":"saida",
      "valor": 540.00,
      "data_ciacao":"18/06/2022",
      "hora_criacao":"17:45"},
      {"descrição":"Internet",
      "criador":"Fernando Amorim",
      "tipo":"saida",
      "valor": 100.00,
      "data_ciacao":"18/06/2022",
      "hora_criacao":"17:45"}]
  }];

  const [isOpen, setIsOpen] = useState(false)
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <Container>
      <Row>
          {aaa.map(item => 
            <Col sm>
              <Card className='card'>
                <CardContent>
                  <center>
                    <p className='titulo'>
                    <input
                      type="button"
                      value={item.nome_grupo}
                      onClick={togglePopup}
                    />
                    </p>
                  </center>
                  <Container>
                    {isOpen && <Popup content={<>
                      <center>
                        <b className="titulo">{item.nome_grupo}</b>
                      </center>
                      <p>Saldo Total: {item.valor_de_caixa}</p>
                      {item.finanças.map(finca =>
                        <div>
                          <p>-----------------------------------</p>
                          <p>Descrição: {finca.descrição}</p>
                          <p>Valor: {finca.valor}</p>
                          <p>Criador: {finca.criador}</p>
                          <p>Data Criação: {finca.data_ciacao}</p>
                          <p>Tipo: {finca.tipo}</p>
                        </div>
                        )}
                      </>}
                      handleClose={togglePopup}
                    />}
                  </Container>
                </CardContent>
              </Card>
            </Col>
           
          )}
      </Row>
    </Container>    
  </div>
      
}
 
export default VisualizarGrupo;