import React from 'react'
import {Link} from 'react-router-dom'
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa'

const ServiceCta = () => {
    const phone = import.meta.env.VITE_WHATSAPP_NO
    const message = import.meta.env.VITE_WHATSAPP_MESSAGE
  return (
    <section>
        <div className='bg-primary text-white p-7 rounded-lg items-center gap-y-5 flex flex-col lg:flex-row justify-between'>
            <div className='text-center lg:text-left'>
                <h2 className='text-[25px] font-bold'>Need a Service? Book a Technician Now</h2>
                <p className='text-lg'>Our expert technicians are ready to help with any electrical needs</p>
            </div>
            <div className='flex gap-5 flex-col md:flex-row'>
                <Link 
                to={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target='_blank' rel='noopener noreferrer'
                className='bg-white shadow-lg hover:opacity-[.9] duration-500 p-3 px-7 inline-flex
                gap-3 text-primary rounded'>
                <FaWhatsapp size={25} fill='#000'
                />
                    Book via WhatsApp
                </Link>
                <Link to={"/book"} className='shadow-lg border-2 border-white duration-500 p-3 px-7 inline-flex
                gap-3 text-white rounded hover:bg-black hover:border-black'>
                <FaCalendarAlt size={25} fill='#fff'
                />
                Schedule Online
                </Link>
            </div>
        </div>
  </section>
  )
}

export default ServiceCta