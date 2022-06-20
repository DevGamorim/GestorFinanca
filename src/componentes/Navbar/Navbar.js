import { Link, useNavigate } from 'react-router-dom';
import Botao from '../utils/Botao/Botao';
import { AiOutlineLogout } from 'react-icons/ai';
import './Navbar.scss'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

function Navbar () {
  const navigate = useNavigate();
  
  const context = useContext(AuthContext);
  
  function deslogar () {
    localStorage.removeItem('logged');
    context.setLogged(false);
    navigate("login");
  }
  
  return <>
    <div className="nav-bar-container-light">
      <img
        src='logo192.png'
        className="website-logo"
        alt="website logo"
      />
      <ul className="middle-items">
        <li className="list-item">
          <Link to="/home" className="link">
            PROJETOS
          </Link>
        </li>
        <li className="list-item">
          <Link to="/about" className="link">
            SOBRE
          </Link>
        </li>
      </ul>
      <Botao size='small' className='deslogar' onClick={deslogar}><AiOutlineLogout></AiOutlineLogout></Botao>
    </div>
  </>
}

export default Navbar;