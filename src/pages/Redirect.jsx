import React, { useEffect } from 'react'
import Logo from "../assets/images/Logo.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Redirect = () => {
  const location = useLocation()
  const type = location.state?.type;
  const navigate = useNavigate()
  useEffect(()=> {
    if(!type) {
      navigate("/")
    }
  },[type,navigate])
  return (
        <aside className='bg-secondary  h-screen pt-[10%] flex flex-col gap-5 text-center p-7'>
            <Link className='block mx-auto' to={"/"}> <img src={Logo} alt="NadiiTech"  className='w-50'/></Link>
                <h2 className='font-bold text-[30px] text-center mb-2 text-primary mt-10'>Check your email</h2>
                <p className='font-semibold text-xl md:w-[500px] mx-auto'>{type === "signup" ? "Your account is almost ready! Please check your inbox or spam folder and click the confirmation link to complete your signup" 
                : "We've sent you a link to reset your password. Please check your inbox or spam folder and click on the link to reset your password."}</p>
        </aside>
  )
}

export default Redirect