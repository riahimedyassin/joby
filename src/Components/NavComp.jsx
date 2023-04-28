import './NavComp.css'
import logo from '../Imgs/Logo.png'
import Button from './Button';
import {Link} from 'react-router-dom'
function CollapsibleExample() {
  return (
    <nav className='d-flex align-center jcc'>
      <div className="brand ">
        <img src={logo} alt="" className='brand'/>
      </div>
      <ul className='d-flex align-center'>
        <Link to="/">
          <li>Home</li>
        </Link>
          <li>Our Plans</li>
        <li>About us</li>
        <Link to="">
          <li>Company</li>
        </Link>
        {localStorage.getItem("isAuth") ? <button className='btnMain'>Profile</button> : <Link to="/login"><Button name="Login"></Button></Link>}
        
      </ul>
    </nav>
    
  );
}

export default CollapsibleExample;