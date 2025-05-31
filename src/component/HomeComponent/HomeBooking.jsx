import React from 'react'
import BookingForm from '../BookingForm'
import { FaPhone, FaWhatsapp } from 'react-icons/fa6'

const HomeBooking = () => {
  const phone_no = import.meta.env.VITE_PHONE_NO
  const whatsapp_no = import.meta.env.VITE_WHATSAPP_NO
  return (
    <section className='bg-primary flex flex-col md:flex-row gap-3 items-center justify-between text-white  lg:gap-10'>
      <div className='basis-1/2 p-3' >
        <h2 className='font-bold text-2xl'>Book a Service Today</h2>
        <p >Need electrical services? Our team of expert technicians is ready to help. Fill out the 
          form or call us directly to schedule a service appointment.
        </p>

        <div className='flex mt-5 gap-5'>
          <button className='bg-black/80  p-3 mb-2 rounded-full '>
            <FaPhone size={20} fill='#FFF'/>
          </button>
          <div className=''>
              <small className='mb-1 text-secondary'>Call us directly</small>
              <p className='text-[18px]'>{phone_no}</p>
          </div>
        </div>

        <div className='flex mt-5  gap-5'>
          <button className='bg-black/70  p-3 mb-2 rounded-full '>
            <FaWhatsapp size={20} fill='#FFF'/>
          </button>
          <div className=''>
              <small className='mb-1 text-secondary'>Call us directly</small>
              <p className='text-[18px]'>{whatsapp_no}</p>
          </div>
        </div>
      </div>


      <BookingForm className="home-booking p-3 lg:p-7 rounded-lg shadow-2xl bg-white text-black w-full basis-1/2" title="Request a Service"/>
    </section>
  )
}

export default HomeBooking