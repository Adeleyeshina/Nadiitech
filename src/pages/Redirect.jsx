import React, { useEffect } from 'react'
import Logo from "../assets/images/Logo.png"
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../stores/useUserStore'
import LoadingSpinner from '../component/LoadingSpinner'

const Redirect = () => {
  const {checkAuth, user,checkingAuth} = useUserStore()
   const navigate = useNavigate()
    useEffect(() => {
      checkAuth()
      user && navigate("/")
    },[checkAuth])
      if(checkingAuth) return <LoadingSpinner />
  return (
        <aside className='bg-secondary  h-screen pt-[10%] flex flex-col gap-5 text-center p-7'>
            <img src={Logo} alt="NadiiTech"  className='w-50 mx-auto'/>
                <h2 className='font-bold text-[30px] text-center mb-5 text-primary'>Please verify your email</h2>
                <p className='font-semibold text-xl'>Almost done! Check your email and click the confirmation link to finish signing up.</p>
        </aside>
  )
}

export default Redirect