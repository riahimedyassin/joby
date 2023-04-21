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
        <li>Home</li>
        <li>Our Plans</li>
        <li>About us</li>
        <li>Company</li>
        <Link to="/login">
        <Button name="Login"></Button>
        </Link>
        
      </ul>
    </nav>
    
  );
}

export default CollapsibleExample;