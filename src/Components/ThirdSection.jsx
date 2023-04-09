import React from 'react'
import './ThirdSection.css'
import ImgOne from '../Imgs/rocketbright.png'
import ImgTwo from '../Imgs/ideabright.png'
import ImgThree from '../Imgs/flashbright.png'
import InfoComp from './InfoComp'
function ThirdSection() {
    const infoOne = ["Fast Search", "We provide a Fast REST API to get your results as fast as possible"];
    const infoTwo = ["Best Results", "Our filters helps you pick your next Job efficiently and quickly"];
    const infoThree = ["Secure", "We support multiple payment method for you next subscription"];
    return (
        <>
            <div className='thirdSection d-flex align-center dc'>
                <h1>What You Should Know About Us</h1>
                <div className='d-flex'>
                    <InfoComp title={infoOne[0]} img={ImgOne} des={infoOne[1]} />
                    <InfoComp title={infoTwo[0]} img={ImgTwo} des={infoTwo[1]} />
                    <InfoComp title={infoThree[0]} img={ImgThree} des={infoThree[1]} />
                </div>
            </div>
        </>
    )
}

export default ThirdSection
