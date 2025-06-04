import React from 'react'
import { BiSolidQuoteLeft } from 'react-icons/bi'

const Commitment = () => {
  return (
    <section className=''>
        <div className='lg:px-32 py-5 grid justify-center'>  
            <div className='p-5 lg:p-10 grid gap-7 shadow-2xl rounded-lg border-l-6 border-primary relative'>
                <h2 className='text-3xl md:text-4xl font-bold'>Our Commitment</h2>
                <div className='flex gap-3'>
                     <BiSolidQuoteLeft size={50} fill='#F5871F' />
                    <p className='text-2xl italic flex-2/3 lg:flex-3/4'>
                        At NADII TECHNOLOGY AND ENGINEERING NIG, we don't just build systems—we build trust, 
                        create value, and push the boundaries of what's possible. Whether it's automation, smart energy 
                        solutions, or custom engineering projects, we are here to turn ideas into reality.
                    </p>
                </div>
                <span className='bg-primary h-1 w-20 justify-self-end'></span>
            </div>
        </div>
    </section>
  )
}

export default Commitment