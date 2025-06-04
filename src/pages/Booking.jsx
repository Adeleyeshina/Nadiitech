import React from 'react'
import PagesHeader from '../component/PagesHeader'
import BookingBg from '../assets/images/booking-bg.jpeg'
import BookingSection from '../component/BookingComponents/BookingSection'
import BookingWhy from '../component/BookingComponents/BookingWhy'
import BookingFaq from '../component/BookingComponents/BookingFaq'

const Booking = () => {
  return (
    <div>
      <PagesHeader img={BookingBg} page={"booking"} title={"Book a Service with Us"} 
      body={"Fast, reliable, and professional — schedule your service in just a few clicks."} 
      ctaText={"Book Now"} ctaNav={"/book"}
      />

      <BookingSection />
      <BookingWhy />
      <BookingFaq />
    </div>
  )
}

export default Booking