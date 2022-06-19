import './App.css';
import Home from './componentes/Home/Home';

import Footer from "./componentes/Footer/Footer";

import GrupoComponent from "./componentes/GrupoComponent/GrupoComponent";

function App() {
  return (
  <div className="App">
    <GrupoComponent></GrupoComponent>
    <Home></Home>
    <Footer />
  </div>    
  );
}

export default App;
