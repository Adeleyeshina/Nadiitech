import React, { useEffect } from 'react'
import Hero from '../component/HomeComponent/Hero'
import Heading from '../component/Heading'
import FeaturedProduct from '../component/HomeComponent/FeaturedProduct'
import ServiceSection from '../component/HomeComponent/ServiceSection'
import HomeAbout from '../component/HomeComponent/HomeAbout'
import TestimonialCard from '../component/TestimonialCard'
import HomeBooking from '../component/HomeComponent/HomeBooking'
import { useProductStore } from '../stores/useProductStore'

const Home = () => {
  const {getFeaturedProduct} = useProductStore()
  useEffect(()=> {
    getFeaturedProduct()
  },[])
  return (
    <div>
      <Hero />
      <ServiceSection />
      <FeaturedProduct />
      <HomeAbout />
      <section className='bg-ash'>
        <Heading title={"What Our Clients Say"} body={"Don't just take our word for it — hear from our satisfied customers"}/>
        <TestimonialCard />
      </section>
      <HomeBooking />
    </div>
  )
}

export default Home