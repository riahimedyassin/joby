import React from 'react'
import notfound from '../Imgs/notfound.png'
import './Error.css'
import {Link} from 'react-router-dom'
function Error() {
  return (
    <div className='Error d-flex jcc align-center dc'>
        <h3>JOBY</h3>
      <img src={notfound} alt="" />
      <h1>404 : Page Not Found</h1>
      <Link to="/">
        <button>Go Back Home</button>
      </Link>
      
    </div>
  )
}

export default Error
