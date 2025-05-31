import React from 'react'

const Heading = ({title, className, body}) => {
  return (
    <article className={`text-center ${className}`}>
        <h2 className='text-2xl md:text-3xl font-bold'>{title}</h2>
        <p className='text-[16px] md:text-[20px] md:w-[700px] mt-2 mx-auto'>{body}</p>
    </article>
  )
}

export default Heading