import React from 'react'
import './HeadSection.css'
import InputField from './InputField'
function HeadSection() {
  return (
    <div className=' headerSection d-flex jcc align-center dc'>
        <h1>Perfect Place to find <br/>your <span>Dream Job</span></h1>
        <InputField placeholder="Search for your next job" btnName="Find"/>
    </div>
  )
}

export default HeadSection
