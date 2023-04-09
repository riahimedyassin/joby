import React from 'react'
import './Payment.css'
import PayButton from './PayButton'
function Payment({title,price,features,bgColor}) {
  return (
    <div className='paymentCard d-flex dc '>
      <h2>{title}</h2>
      <h4>{price}</h4>
      <hr />
      <ul>
        {features.map(el => {
            return <li className='feature' key={el.toString()}>{el}</li>
        })}
      </ul>
      <PayButton bgColor={bgColor}/>
    </div>
  )
}

export default Payment
