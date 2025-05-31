import React from 'react'
import { testimonials } from '../data'
import StarRatings from 'react-star-ratings'

const TestimonialCard = () => {
  return (
    <div className='grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
            testimonials.map(({id, image, name, rating, reply}) => {
                return (
                    <div key={id} className='bg-white shadow rounded-2xl p-5'>
                        <div className='flex gap-5 place-items-center mb-4'>
                            <img src={image} alt="" className='w-15 rounded-full'/>
                            <div>
                                <h3 className='font-semibold text-[17px]'>{name}</h3>
                                <StarRatings numberOfStars={5} rating={rating} starRatedColor='gold' starSpacing='3px' starDimension='20px'/>
                            </div>
                        </div>
                        <p>"{reply}"</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TestimonialCard