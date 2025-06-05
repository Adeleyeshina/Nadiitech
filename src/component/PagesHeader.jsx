import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { MdOutlineArrowForwardIos} from 'react-icons/md'


const PagesHeader = ({img, page, title, body, ctaText, ctaNav, className, icon}) => {
  const navigate = useNavigate()
  return (
    <article style={{backgroundImage : `url(${img})`}} className={`min-h-[350px] py-4 bg-no-repeat bg-center grid items-center relative bg-cover ${className}`}>   
      <div className="absolute bg-black/60 text-white w-full grid items-center h-full">
        <main>

          <div className='flex gap-2 items-center text-lg'>
            <p className='cursor-pointer' onClick={() => navigate("/")}>Home</p>
            <MdOutlineArrowForwardIos className='mt-0.5'/>
            <p className='text-primary'>{page}</p>
          </div>

          <h1 className='text-3xl md:text-4xl font-bold md:w-[80%] mt-4'>{title}</h1>
          <p className='text-[16px] md:text-[20px] mt-3'>{body}</p>
        
          <Link to={ctaNav} className='bg-primary mt-4 hover:bg-black duration-500 font-semibold p-3 px-7 text-white rounded w-fit flex gap-2 items-center'>{icon} {ctaText}</Link>
        </main>
      </div>
    </article>
  )
}

export default PagesHeader