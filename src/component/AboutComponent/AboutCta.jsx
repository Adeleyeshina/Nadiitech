import React from 'react'
import Heading from "../Heading"
import {Link} from 'react-router-dom'
import {FaWhatsapp} from 'react-icons/fa'

const AboutCta = () => {
    const phone = import.meta.env.VITE_WHATSAPP_NO
    const message = import.meta.env.VITE_WHATSAPP_MESSAGE
  return (
    <section className='text-center grid justify-center bg-secondary '>
        <div>
           <Heading title={"Let's Build Something Great Together"}
            body="Ready to transform your ideas into reality? Our team of experts is here
             to help you navigate the complexities of technology and engineering."
           /> 

            <div className='md:w-8/12 justify-items-center mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 '>
                <Link to={"/services"} className='text-white text-center bg-primary p-4 px-7 rounded-full font-semibold text-lg'>
                    View Our Services
                </Link>
                <Link to={"/book"} className='text-center text-white p-4 px-7 rounded-full font-semibold text-lg bg-primary'>
                    Book a Consultation
                </Link>

                <Link 
                    to={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target='_blank' rel='noopener noreferrer'
                    className='flex gap-2 items-center bg-[#25d366] p-4 px-7 rounded-full font-semibold text-lg md:col-span-2 justify-self-center text-white'>
                    <FaWhatsapp size={25} fill='#fff'
                />
                    Chat on WhatsApp
                </Link>
            </div>
        </div>
    </section>
  )
}

export default AboutCta