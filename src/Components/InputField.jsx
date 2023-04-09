import React from 'react'
import './InputField.css'
import Button from './Button'
function InputField({placeholder,btnName}) {
  return (
    <div className='inputField'>
      <input type="text" name="" id="" placeholder={placeholder}/>
      <Button name={btnName} />
    </div>
  )
}

export default InputField
