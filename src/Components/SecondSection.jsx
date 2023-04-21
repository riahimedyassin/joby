import React, { useState } from 'react'
import './SecondSection.css'
import Payment from './Payment'
import PaymentData from '../Data/PaymentInfo'
function SecondSection() {
  const [BgYellow,setBgYellow] = useState("var(--yellow)")
  const showPayedPlans=PaymentData.map(el=> {
    return <Payment title={el.title} price={el.price} features={el.features}bgColor="white"/>
  })
  return (
    <div className='secondSection d-flex align-center  dc'>
        <h1>Accelerate Your Job Search with <br/>JOBY Payed Plans</h1>
        <div className="paymentHolder d-flex jca">
            {showPayedPlans}
        </div>
        
    </div>
  )
}

export default SecondSection
