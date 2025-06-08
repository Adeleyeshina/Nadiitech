import React, {useState, useEffect} from 'react'
import { FaPlug, FaTools, FaWhatsapp } from 'react-icons/fa'
import { MdError, MdHome } from 'react-icons/md'
import {Link, useNavigate}  from 'react-router-dom'

const NotFound = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NO
   const message = import.meta.env.VITE_WHATSAPP_MESSAGE

   const navigate = useNavigate ()
   const [countDown, setCountDown] = useState(7)

   useEffect(() => {

    const timer = setInterval(() => {
      setCountDown(prev => prev - 1)
    }, 1000);

    if(countDown === 0) {
      clearInterval(timer)
      navigate("/")
    }
    
    return () => clearInterval(timer)
   }, [countDown, navigate])
  return (
    <div className='text-center flex flex-col place-items-center bg-secondary py-15 px-5'>
        <div className='animate-bounce rounded-full w-fit shadow-xl p-10'>
          <FaPlug fill='#F5871F' size={100}/>

          <MdError fill="red" size={50} className='absolute top-0 right-0'/>
        </div>

        <div className='grid gap-2'>
          <h1 className='text-7xl font-semibold'>404</h1>
          <h2 className='text-4xl font-semibold'>Oops! Page Not Found</h2>
          <p>Looks like the wire got disconnected.</p>
          <p className='text-gray-500'>The page you're looking for doesn't exist, was moved, or the link is broken.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 mt-7'>
          <Link to={"/"} className='btn text-xl bg-primary text-white'>
            <MdHome fill='#Fff' size={30}/>
            Go to Homepage
          </Link>
          <Link to={"/services"}
            className='text-xl btn bg-white'
          >
            <FaTools fill='' size={30}/>
            Browse Services
          </Link>
          <Link to={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} className='btn text-xl bg-[#25d366] text-white'>
            <FaWhatsapp fill='#Fff' size={30}/>
            Chat Support 
          </Link>
        </div>
        
        <div className="mt-10 grid gap-5">
          <p className='text-gray-500'>Even our Engineers couldn't fix this page</p>
          <p className='text-gray-500'>Redirecting to homepage in {countDown} seconds</p>
        </div>
    </div>
  )
}

export default NotFound