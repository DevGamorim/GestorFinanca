import logo from './logo.svg';
import './App.css';

import Select_grup from './componentes/Select_grup/Select_grup';
import Footer from "./componentes/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
  <div className="App">
    <div className='back'>
      <div className="p-4 p-md-5 pt-5 back2">
        <Select_grup />
      </div>  
    </div>      
    <Footer />
  </div>    
  );
}

export default App;
