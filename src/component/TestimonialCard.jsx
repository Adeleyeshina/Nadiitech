import React from 'react'
import { testimonials } from '../data'
import StarRatings from 'react-star-ratings'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TestimonialCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 by default
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll : 2,
        }
      },
      {
        breakpoint: 640, // tablets
        settings: {
          slidesToShow: 1,
        slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <div className="mt-10 ">
      <Slider {...settings}>
        {
          testimonials.map(({ id, image, name, rating, reply }) => (
            <div key={id} className='px-3'> {/* Add horizontal padding */}
              <div className='bg-white shadow rounded-2xl p-5 h-full'>
                <div className='flex gap-5 items-center mb-4'>
                  <img src={image} alt={name} className='w-16 h-16 rounded-full object-cover' />
                  <div>
                    <h3 className='font-semibold text-[17px]'>{name}</h3>
                    <StarRatings
                      numberOfStars={5}
                      rating={rating}
                      starRatedColor='gold'
                      starSpacing='3px'
                      starDimension='20px'
                    />
                  </div>
                </div>
                <p>"{reply}"</p>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default TestimonialCard
