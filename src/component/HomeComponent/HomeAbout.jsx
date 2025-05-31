import React from 'react'
import Img from "../../assets/images/why-image.png"
import Heading from '../Heading'
import {FaBolt, FaLightbulb} from'react-icons/fa'
import {BiSolidBadgeCheck} from 'react-icons/bi'

const HomeAbout = () => {
  return (
    <section>
        <Heading title={"Why Choose NadiiTech"}
         body={"We combine technical expertise with customer-focused service to deliver exceptional results."}/>

        <div className='mt-7 lg:mt-15 flex flex-col lg:flex-row justify-between gap-15 items-center'>
            {/* Left */}
            <div className='flex flex-col gap-10'>
                <div className='flex items-start gap-5'>
                    <button className='bg-secondary p-3 mb-2 rounded-full '>
                     <FaBolt size={25} fill='#F5871F'/>
                    </button>
                    <div>
                        <h3 className='font-bold text-[20px] mb-1'>Fast Response</h3>
                        <p>Our team responds quickly to all service requests, with emergency services available 24/7.</p>
                    </div>
                </div>
                <div className='flex items-start gap-5'>
                    <button className='bg-secondary p-3 mb-2 rounded-full '>
                     <BiSolidBadgeCheck size={25} fill='#F5871F'/>
                    </button>
                    <div>
                        <h3 className='font-bold text-[20px] mb-1'>Trusted Technicians</h3>
                        <p>Our certified and experienced technicians ensure high-quality workmanship on every job.</p>
                    </div>
                </div>
                <div className='flex items-start gap-5'>
                    <button className='bg-secondary p-3 mb-2 rounded-full '>
                     <FaLightbulb size={25} fill='#F5871F'/>
                    </button>
                    <div>
                        <h3 className='font-bold text-[20px] mb-1'>Smart Solutions</h3>
                        <p>We provide innovative and energy-efficient solutions tailored to your specific needs.</p>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className='basis-1/2 rounded-xl overflow-hidden relative'>
                <img src={Img} alt="" className=''/>
                {/* <div className='absolute top-0 left-0 w-full h-full bg-black/40'></div> */}
            </div>
        </div>
    </section>
  )
}

export default HomeAbout