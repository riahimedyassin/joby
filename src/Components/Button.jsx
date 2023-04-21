import React from 'react'
import './Button.css'
function Button({name}) {
  return (
    <>
      <button className='btnMain' >{name}</button>
    </>
  )
}

export default Button
