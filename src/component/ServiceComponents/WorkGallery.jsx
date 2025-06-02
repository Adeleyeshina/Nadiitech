import React from 'react'
import Heading from '../Heading'
import {workGalleryImg} from '../../data'

const WorkGallery = () => {
  return (
    <section className='bg-black text-white'>
        <Heading title={"Our Work In Action"}
        body={"See examples of our expert electrical services across various projects"}
        />

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-7'>
            {
                workGalleryImg.map(({id, img}) => {
                    return <img key={id} alt={img} src={img} className='rounded'/>
                })
            }
        </div>

    </section>
  )
}

export default WorkGallery