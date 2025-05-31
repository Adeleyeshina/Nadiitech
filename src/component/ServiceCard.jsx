import React from 'react'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'


const ServiceCard = ({icon, title, content, items, link, className}, index) => {
    const Icon = icon
  return (
    <div key={index} className={`bg-ash p-7 rounded-2xl shadow duration-100 ${className}`}>
        <div>
            <button className='bg-secondary p-3 mb-2 rounded-full'>
                <Icon size={30} fill='#F5871F'/>
            </button>
            <h3 className='font-bold text-[20px] mb-1'>{title}</h3>
            <p>{content}</p>
        </div>
        <ul>
            {
                items.map((item, index) =>{
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ul>
        <Link className='text-primary inline-flex place-items-center gap-2 group' to={link}>
            Learn More <span className='group-hover:translate-x-1 duration-300'><FaArrowRight /></span>
        </Link>
    </div>
  )
}

export default ServiceCard