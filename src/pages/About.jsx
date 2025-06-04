import React from 'react'
import PagesHeader from '../component/PagesHeader'
import AboutBg from '../assets/images/about-bg.webp'
import AboutContent from '../component/AboutComponent/AboutContent'
import CorePrinciples from '../component/AboutComponent/CorePrinciples'
import Objectives from '../component/AboutComponent/Objectives'
import Commitment from '../component/AboutComponent/Commitment'
import Team from '../component/AboutComponent/Team'
import AboutCta from '../component/AboutComponent/AboutCta'

const About = () => {
  return (
    <div>
      <PagesHeader  page="About" title={"Innovating the Future, Solving Today"}
      img={AboutBg}
      body={"Smart, sustainable, and custom-engineered solutions across Nigeria and beyond."}
      ctaText={"Book Now"}
      ctaNav={"/book"}
      />
      <AboutContent />
      <CorePrinciples />
      <Objectives />
     <Commitment />
     <Team />
     <AboutCta />
    </div>
  )
}

export default About