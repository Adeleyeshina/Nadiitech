import React from 'react'
import { serviceList } from '../data'
import ServiceCard from '../component/ServiceCard'
import PagesHeader from '../component/PagesHeader'
import serviceBg from "../assets/images/service-bg.webp"
import ServiceCta from '../component/ServiceComponents/ServiceCta'
import WorkGallery from '../component/ServiceComponents/WorkGallery'

const Services = () => {

  return (
    <div>
      <PagesHeader img={serviceBg} page="Services" title="Explore Our Services"
       body="From installations and repairs to advanced 
        automation — we handle it all." ctaText="Book a Technician" ctaNav="/book" classname=""/>

      <section>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            serviceList.map(({id, icon, title, content, items}) => {
              return <ServiceCard key={id} icon={icon} title={title} content={content} items={items} className={"service-page"}/>
            })
          }
        </div>
      </section>
      <WorkGallery />
      <ServiceCta />
    </div>
  )
}

export default Services