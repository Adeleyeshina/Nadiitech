import React from 'react'
import { serviceList } from '../data'
import ServiceCard from '../component/ServiceCard'

const Services = () => {
  return (
    <div>
      {/* <div>
        {
          serviceList.map(({id, icon, title, content, items}) => {
            return (
              <ServiceCard key={id} icon={icon} title={title} content={content} items={items} className={"service-page"}/>
            )
          })
        }
      </div> */}
    </div>
  )
}

export default Services