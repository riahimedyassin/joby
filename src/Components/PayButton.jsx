import React from 'react'
import './PayButton.css'
function PayButton({bgColor}) {
  return (
    <>
        <button style={{backgroundColor:{bgColor}}}
                className='PayButton'
        >Purchase</button>
    </>
  )
}

export default PayButton
