import './NavComp.css'
import logo from '../Imgs/Logo.png'
import Button from './Button';

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
        <Button name="Login"></Button>
      </ul>
    </nav>
    
  );
}

export default CollapsibleExample;