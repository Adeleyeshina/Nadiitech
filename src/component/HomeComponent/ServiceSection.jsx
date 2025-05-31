import React from 'react'
import { serviceList } from '../../data'
import ServiceCard from '../ServiceCard'
import {Link} from "react-router-dom"
import Heading from '../Heading'

const ServiceSection = () => {
  return (
        <section>
            <Heading title="Our Services" body="Professional electrical and automation services for residential, commercial, and industrial needs."/>
            <div className='relative grid place-items-center'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-3 mt-7'>
                    {
                        serviceList.slice(0, 6).map(({id, icon, title, content, items})=>{
                            return <ServiceCard key={id} icon={icon} title={title} content={content} items={items} link="/services" className={"home-service"}/>
                        })
                    }
                </div>

                <Link className='bg-primary text-white mt-4 p-2 px-7 shadow rounded' to={"/services"}>View All Services</Link>
            </div>
        </section>

  )
}

export default ServiceSection