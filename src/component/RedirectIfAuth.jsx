import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useUserStore } from '../stores/useUserStore'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'

const RedirectIfAuth = () => {
    const navigate = useNavigate()
    const {user, checkAuth, checkingAuth} = useUserStore()
    useEffect(()=> {
        checkAuth()
    },[])

    useEffect(()=> {
        if(!checkingAuth && user) {
            navigate("/")
        }
    },[user, checkingAuth])
    if(checkingAuth) return <LoadingSpinner />
  return (
    <Outlet />
  )
}

export default RedirectIfAuth