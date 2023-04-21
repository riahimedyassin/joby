import React from 'react'
import './ThirdSection.css'
import GeneralInfo from '../Data/GeneralInfo'
import InfoComp from './InfoComp'

function ThirdSection() {
    const showGeneral = GeneralInfo.map((el) => {
        return <InfoComp title={el.name} img={el.image} des={el.descreption} key={el.name} />
    })

    return (
        <>
            <div className='thirdSection d-flex align-center dc'>
                <h1>What You Should Know About Us</h1>
                <div className='d-flex'>
                    {showGeneral}
                </div>
            </div>
        </>
    )
}

export default ThirdSection
