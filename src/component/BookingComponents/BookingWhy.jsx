import React from 'react'
import Heading from '../Heading'
import { FaBolt } from 'react-icons/fa6'
import { FaCertificate, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineSecurity } from 'react-icons/md'

const BookingWhy = () => {
  return (
    <section>
        <Heading title={"Why Choose NADII"} body={"We pride ourselves on delivering excellence in every service"}/>
        <div className='mt-10 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-ash rounded-xl p-7 py-10 shadow-sm hover:shadow-lg'>
                <button className='bg-secondary p-5 mb-2 rounded-full'>
                    <FaBolt size={30} fill='#F5871F'/>
                </button>
                <h3 className='font-bold text-[20px] mb-1'>Fast Response</h3>
                <p>We respond to service requests within 2 hours for urgent matters</p>
            </div>
            <div className='bg-ash rounded-xl p-7 py-10 shadow-sm hover:shadow-lg'>
                <button className='bg-secondary p-5 mb-2 rounded-full'>
                    <FaCertificate size={30} fill='#F5871F'/>
                </button>
                <h3 className='font-bold text-[20px] mb-1'>Certified Technicians</h3>
                <p>Our team consists of fully certified and experienced professionals</p>
            </div>
            <div className='bg-ash rounded-xl p-7 py-10 shadow-sm hover:shadow-lg'>
                <button className='bg-secondary p-5 mb-2 rounded-full'>
                    <FaWhatsapp size={30} fill='#F5871F'/>
                </button>
                <h3 className='font-bold text-[20px] mb-1'>Real-Time Support</h3>
                <p>Get instant support via WhatsApp for any questions or concerns</p>
            </div>
            <div className='bg-ash rounded-xl p-7 py-10 shadow-sm hover:shadow-lg'>
                <button className='bg-secondary p-5 mb-2 rounded-full'>
                    <MdOutlineSecurity size={30} fill='#F5871F'/>
                </button>
                <h3 className='font-bold text-[20px] mb-1'>Safe & Reliable</h3>
                <p>All our work is guaranteed and follows industry safety standards</p>
            </div>
        </div>
    </section>
  )
}

export default BookingWhy