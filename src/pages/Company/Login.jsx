import React, { useState } from 'react'
import './Login.css'
function Login() {
  [username,setUsername]=useState("")
  [password,setPassword]=useState("")
  return (
    <div className='loginCompany'>
        <h1>Login as Company</h1>
    </div>
  )
}

export default Login
