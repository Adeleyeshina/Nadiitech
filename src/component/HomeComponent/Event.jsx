import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEventStore } from '../../stores/useEventStore'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const NextArrow = ({ onClick }) => (
    <div
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-black/50 p-2 rounded-full text-white"
        onClick={onClick}
    >
        <FaChevronRight size={20} />
    </div>
)

const PrevArrow = ({ onClick }) => (
    <div
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-black/50 p-2 rounded-full text-white"
        onClick={onClick}
    >
        <FaChevronLeft size={20} />
    </div>
)

const Event = () => {
    const { events } = useEventStore()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    if (!events || events.length === 0) return null

    return (
        <div className="relative w-full overflow-hidden">
            {events.length === 1 ? (
                <img
                    src={events[0].image}
                    alt={'Event image'}
                    className="max-h-[500px] lg:max-h-[400px] min-w-full object-cover"
                />
            ) : (
                <Slider {...settings}>
                    {events.map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            alt={`Event ${index + 1}`}
                            className="max-h-[300px] min-w-full object-cover"
                        />
                    ))}
                </Slider>
            )}
        </div>
    )
}

export default Event
