import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useUserStore } from '../stores/useUserStore'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'

const Protect = () => {
    const {checkAuth, checkingAuth} = useUserStore()
    useEffect(()=> {
        checkAuth()
    },[checkAuth])
    
    if(checkingAuth) return <LoadingSpinner />
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Protect