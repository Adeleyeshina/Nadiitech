import React from 'react'
import {Link} from 'react-router-dom'
import {FaWhatsapp, FaInstagram} from 'react-icons/fa'
import HeroImg from "../../assets/images/nadii-hero.png"

const Hero = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NO
  const instagram_name = import.meta.env.VITE_INSTAGRAM
  const message = import.meta.env.VITE_WHATSAPP_MESSAGE
  return (
    <header className='flex flex-col gap-x-30 gap-y-10 justify-between items-center bg-secondary lg:flex-row'>
      <div className=''>
        <h1 className=' text-3xl md:text-4xl text-primary font-bold md:w-[80%]'>Smart Electrical Solutions. Expert Installation. Total Control.</h1>
        <p className='text-[16px] md:text-[20px] mt-3'>Professional electrical services for residential and commercial needs.
          Quality workmanship and customer satisfaction guaranteed.
        </p>

        <div className='flex flex-col md:flex-row gap-4 mt-5'>
          <Link to="/book" className='bg-primary hover:bg-black duration-500 p-3 px-7 text-white rounded w-fit'>Book a Technician</Link>
          <Link to={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target='_blank' rel='noopener noreferrer' className='flex place-items-center gap-2'>
            <FaWhatsapp /> WhatsApp</Link>
          <Link to={`https://www.instagram.com/${instagram_name}`} target='_blank' rel='noopener noreferrer' className='flex place-items-center gap-2'>
            <FaInstagram /> Instagram
          </Link>
        </div>
      </div>
      <div className='overflow-hidden shadow relative'>
        <img src={HeroImg} alt="Nadii Technology" className='w-full h-auto rounded-xl shadow object-cover'/>
        {/* <div className='absolute top-0 left-0 w-full h-full bg-black/40'></div>  */}
      </div>
    </header>
  )
}

export default Hero