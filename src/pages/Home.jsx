import React, { useEffect } from 'react'
import Hero from '../component/HomeComponent/Hero'
import Heading from '../component/Heading'
import FeaturedProduct from '../component/HomeComponent/FeaturedProduct'
import ServiceSection from '../component/HomeComponent/ServiceSection'
import HomeAbout from '../component/HomeComponent/HomeAbout'
import TestimonialCard from '../component/TestimonialCard'
import HomeBooking from '../component/HomeComponent/HomeBooking'
import Event from '../component/HomeComponent/Event'
import { useProductStore } from '../stores/useProductStore'
import { useEventStore } from '../stores/useEventStore'

const Home = () => {
  const { getFeaturedProduct } = useProductStore()
  const { fetchAllEvents } = useEventStore()

  useEffect(() => {
    getFeaturedProduct()
    fetchAllEvents()
  }, [])
  return (
    <div>
      <Hero />
      <ServiceSection />
      <FeaturedProduct />
      <HomeAbout />
      <section className='bg-ash'>
        <Heading title={"What Our Clients Say"} body={"Don't just take our word for it — hear from our satisfied customers"} />
        <TestimonialCard />
      </section>
      <HomeBooking />
      <Event />
    </div>
  )
}

export default Home