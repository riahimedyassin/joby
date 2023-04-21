import React from 'react'
import Footer from '../Components/Footer';
import FourthSection from '../Components/FourthSection';
import HeadSection from '../Components/HeadSection';
import NavComp from '../Components/NavComp'
import SecondSection from '../Components/SecondSection';
import SixthSection from '../Components/SixthSection';
import ThirdSection from '../Components/ThirdSection';
function Welcome() {
  return (
    <>
      <NavComp />
      <HeadSection />
      <SecondSection />
      <ThirdSection />
      <SixthSection />
      <Footer />
    </>
  )
}

export default Welcome
