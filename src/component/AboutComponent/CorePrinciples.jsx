import React from 'react'
import Heading from '../Heading'
import { FaEye } from "react-icons/fa6";
import { FaBullseye } from 'react-icons/fa';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const CorePrinciples = () => {
  return (
    <section>
        <Heading title={"Our Core Principles"}/>
        
        <div className="grid grid-cols-1 gap-5 mt-9 sm:grid-cols-3">
            <div className='border-t-7 border-primary rounded-lg shadow-xl p-7'>
                <button className='bg-secondary p-3 mb-2 rounded-full'>
                    <FaEye size={30} fill='#F5871F'/>
                </button>
                <h3 className='font-bold text-2xl mb-2'>Vision</h3>
                <p>
                    To be a leading force in transforming industries and improving lives through cutting-edge 
                    technology and world-class engineering services.
                </p>
            </div>
            <div className='border-t-7 border-primary rounded-lg shadow-xl p-7'>
                <button className='bg-secondary p-3 mb-2 rounded-full'>
                    <FaBullseye size={30} fill='#F5871F'/>
                </button>
                <h3 className='font-bold text-2xl mb-2'>Our Aim</h3>
                <p>
                    To bridge the gap between complex challenges and practical solutions by harnessing the power
                    of innovation, technical expertise, and a deep understanding of our clients' needs.
                </p>
            </div>
            <div className='border-t-7 border-primary rounded-lg shadow-xl p-7'>
                <button className='bg-secondary p-3 mb-2 rounded-full'>
                    <BiSolidQuoteAltLeft size={30} fill='#F5871F'/>
                </button>
                <h3 className='font-bold text-2xl mb-2'>Motto</h3>
                <p>
                    "Making the Impossible Possible Through Technological Innovation."
                </p>
            </div>
        </div>
    </section>
  )
}

export default CorePrinciples