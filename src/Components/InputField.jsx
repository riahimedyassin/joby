import React, { useState } from 'react'
import './InputField.css'
import Button from './Button'
import { Link } from 'react-router-dom'
function InputField({placeholder,btnName}) {  
  return (
    <div className='inputField'>
      <Link to="/findjob">
        <button className='searchButton' name="Search">Search</button>
      </Link>
      
    </div>
  )
}

export default InputField
