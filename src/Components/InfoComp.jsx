import React from 'react'
import './InfoComp.css'
function InfoComp({title,img,des}) {
  return (
    <div className='d-flex dc jcc align-center infoComp'>
      <div className="infoImg">
        <img src={img} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{des}</p>
    </div>
  )
}

export default InfoComp
