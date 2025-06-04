import React from 'react'
import Heading from '../Heading'
import BookingForm from '../BookingForm'

const BookingSection = () => {
  return (
    <section className='bg-ash'>
        <Heading title={"Schedule Your Service"} body={"Tell us what you need and we'll get back to you promptly"}/>
        <BookingForm className="bg-white py-5 px-3 rounded-xl shadow mt-10 md:w-3/4 mx-auto md:p-10 booking-page "/>
    </section>
  )
}

export default BookingSection