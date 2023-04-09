import React from 'react'
import './SixthSection.css'
import InputField from './InputField'
import dottedLine from '../Imgs/linedotted.png'
function SixthSection() {
  return (
    <div className='sixthSection d-flex dc align-center'>
      <h1>Be the first to know about new Jobs </h1>
      <p>Subscribe to the email service to keep updated with our latest JOBS</p>
      <InputField placeholder={"Enter your Email"} btnName={"Subscribe"}/>
      <img src={dottedLine} alt="" />
    </div>
  )
}

export default SixthSection
