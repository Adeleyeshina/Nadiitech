import React from 'react'
import PagesHeader from '../component/PagesHeader'
import BookingBg from '../assets/images/booking-bg.jpeg'
import BookingSection from '../component/BookingComponents/BookingSection'
import BookingWhy from '../component/BookingComponents/BookingWhy'
import BookingFaq from '../component/BookingComponents/BookingFaq'
import { FaWhatsapp } from 'react-icons/fa'


const Booking = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NO
   const message = import.meta.env.VITE_WHATSAPP_MESSAGE
  return (
    <div>
      <PagesHeader img={BookingBg} page={"Booking"} title={"Book a Service with Us"} 
      body={"Fast, reliable, and professional — schedule your service in just a few clicks."} 
      ctaText={"Chat on WhatsApp"} icon={<FaWhatsapp size={25}/>} ctaNav={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} className={"booking-header"}
      />

      <BookingSection />
      <BookingWhy />
      <BookingFaq />
    </div>
  )
}

export default Booking