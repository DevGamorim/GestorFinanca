import './App.css';
import Home from './componentes/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';

import AuthContext from './context/AuthContext';
import { useEffect, useState } from 'react';
import { Snackbar } from '@mui/material';
import CriarGrupo from './componentes/GrupoComponent/CriarGrupo/CriarGrupo';
import VisualizarGrupo from './componentes/GrupoComponent/VisualizarGrupo/VisualizarGrupo';

function App() {
  const [logged, setLogged] = useState(false);
  const [toast, setToast] = useState({open: false, mensagem: '', sucesso: true})

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem('logged'))?.id ? true : false);
  }, [])

  return (
    <AuthContext.Provider
      value={{logged, setLogged: setLogged, setToast}}
    >
      <Router>
        <div className="App">
          <Navbar></Navbar>
            {
            (
              logged
              ?
              <>
                <Routes>
                  <Route path="/login" element={<Home />}>
                  </Route>
                  <Route path="/home" element={<VisualizarGrupo />}>
                  </Route>
                  <Route path="/criar-projeto" element={<CriarGrupo />}>
                  </Route>
                </Routes>
              </>
            :
            <Home />
          )
          }
        </div>
      </Router>
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        open={toast.open}
        message={toast.mensagem}
        color={toast.sucesso ? '#87f542' : '#f57542'}
        onClose={() => this.setToast({open: false, mensagem: '', sucesso: true})}
        autoHideDuration={6000}
      />
    </AuthContext.Provider>
  );
}

export default App;
