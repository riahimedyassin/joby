import React from 'react'
import NavComp from '../Components/NavComp'
import { auth, provider } from '../Firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import google from '../Imgs/google.png'
import './Login.css'
function Login() {
  const navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(results => {
      localStorage.setItem("isAuth", true)
      navigate("/profile")
    }).catch(err => console.log(err))
  }
  return (
    <div className='d-flex jcc align-center dc'>
      <NavComp />
      <div className='d-flex dc align-center'>
        <h1 className='loginWelcome'>Welcome to JOBY , Please Sign In</h1>
        <p>We only offer Google Auth for the moment</p>
        <div className='loginGoogle'>
          <img src={google} alt="" className='googlePic' />
          <button onClick={signInWithGoogle} >Sign In with Google</button>
        </div>
      </div>


    </div>
  )
}

export default Login
