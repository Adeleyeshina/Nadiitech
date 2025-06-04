import React from 'react'
import Heading from '../Heading'
import { FaAward, FaBolt, FaHandshakeSimple, FaLeaf, FaLightbulb } from 'react-icons/fa6'


const Objectives = () => {
  return (
    <section className='bg-ash'>
        <Heading title={"What Drives Us"}
         body={"Our objectives are the foundation of everything we do at NADII Technology & Engineering."}
         className={""}
        />
        
        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            <div className='flex items-start gap-5 '>
                <button className='bg-secondary p-3 mb-2 rounded-full '>
                    <FaLightbulb size={25} fill='#F5871F'/>
                </button>
                <div>
                    <h3 className='font-bold text-[22px] mb-2'>Innovate Continuously</h3>
                    <p className='text-lg'>
                        Develop modern solutions that are efficient, reliable, and scalable to meet evolving industry 
                        demands.
                    </p>
                </div>
            </div>
            <div className='flex items-start gap-5'>
                <button className='bg-secondary p-3 mb-2 rounded-full '>
                    <FaAward size={25} fill='#F5871F'/>
                </button>
                <div>
                    <h3 className='font-bold text-[22px] mb-2'>Deliver Excellence</h3>
                    <p className='text-lg'>
                        Maintain the highest standards in quality, safety, and performance in every project we undertake.
                    </p>
                </div>
            </div>
            <div className='flex items-start gap-5'>
                <button className='bg-secondary p-3 mb-2 rounded-full '>
                    <FaBolt size={25} fill='#F5871F'/>
                </button>
                <div>
                    <h3 className='font-bold text-[22px] mb-2'>Empower Through Technology</h3>
                    <p className='text-lg'>
                        Provide smart engineering tools and solutions that enable our clients to achieve their 
                        goals efficiently.
                    </p>
                </div>
            </div>
            <div className='flex items-start gap-5'>
                <button className='bg-secondary p-3 mb-2 rounded-full '>
                    <FaLeaf size={25} fill='#F5871F'/>
                </button>
                <div>
                    <h3 className='font-bold text-[22px] mb-2'>Support Sustainability</h3>
                    <p className='text-lg'>
                        Promote energy efficiency and long-term sustainability in all our engineering solutions.
                    </p>
                </div>
            </div>
            <div className='flex items-start gap-5 justify-self-center self-center '>
                <button className='bg-secondary p-3 mb-2 rounded-full '>
                    <FaHandshakeSimple size={25} fill='#F5871F'/>
                </button>
                <div>
                    <h3 className='font-bold text-[22px] mb-2'>Collaborate & Grow</h3>
                    <p className='text-lg'>
                        Foster strong partnerships with clients, suppliers, and communities 
                        to shape a better future for all.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Objectives