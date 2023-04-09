import React, { useState } from 'react'
import './SecondSection.css'
import Payment from './Payment'
function SecondSection() {
  const [BgYellow,setBgYellow] = useState("var(--yellow)")
  return (
    <div className='secondSection d-flex align-center  dc'>
        <h1>Accelerate Your Job Search with <br/>JOBY Payed Plans</h1>
        <div className="paymentHolder d-flex jca">
            <Payment title="Premium" price="5$/month" features={
                ["Infinite number of search","Infinite Postule Attempt","Recommended first "]
                }
                bgColor="white"
            />
            <Payment title="Ultimate" price="10$/month" features={
                ["Infinite number of search","Infinite Postule Attempt","Recommended first ", "Automatic Selection according to your skills"]}
                bgColor={BgYellow}
            />
        </div>
        
    </div>
  )
}

export default SecondSection
