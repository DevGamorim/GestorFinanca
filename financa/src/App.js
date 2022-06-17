import './App.css';

import Footer from "./componentes/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import Login from './componentes/Login/Login';

import Select_grup from './componentes/Select_grup/Select_grup';

function App() {
  return (
  <div className="App">
    <Login></Login>
    <Select_grup />
    <Footer />
  </div>
  );
}

export default App;
