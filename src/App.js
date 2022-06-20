import './App.css';
import Home from './componentes/Home/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';

import GrupoComponent from "./componentes/GrupoComponent/GrupoComponent";
import AuthContext from './context/AuthContext';
import { useEffect, useState } from 'react';

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem('logged'))?.id ? true : false);
  })

  return (
    <AuthContext.Provider
      value={{logged, setLogged: setLogged}}
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
                  <Route path="/home" element={<GrupoComponent />}>
                  </Route>
                </Routes>
              </>
            :
            <Home />
          )
          }
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
