import React from 'react'
import Team from '../../assets/images/ab-team.webp'

const AboutContent = () => {
  return (
    <section className='bg-ash'>
        <div className="flex flex-col lg:flex-row place-items-center gap-10">
            <div className='flex-1/2 flex flex-col gap-3'>
                <h2 className='text-2xl md:text-3xl font-bold'>About NADII Technology & Engineering NIG</h2>
                <p className='text-[16px] md:text-lg mt-3'>
                    NADII TECHNOLOGY AND ENGINEERING NIG is a forward-thinking company committed to delivering 
                    innovative technological and engineering solutions that meet the evolving needs of individuals, 
                    businesses, and communities across Nigeria and beyond. We specialize in designing, developing, 
                    and implementing smart, sustainable, and efficient systems tailored to solve real-world challenges.
                </p>
                <div className="flex items-center gap-3 text-lg">
                    <span className='bg-primary w-12 h-1'></span>
                    <p>Established 2018</p>
                </div>
            </div>
            <div className='flex-1/2 overflow-hidden rounded-lg relative lg:h-[450px]'>
                <img src={Team} alt="Our team img" className='w-full h-full object-center object-cover'/>

            </div>
        </div>
    </section>
  )
}

export default AboutContent