import React, { useEffect } from 'react'
import { useUserStore } from '../stores/useUserStore'
import { Outlet } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'

const AllowIfAuth = () => {
    const {checkAuth, checkingAuth} = useUserStore()
    useEffect(() =>{
        checkAuth()
    }, [checkAuth])
    if (checkingAuth) return <LoadingSpinner />
  return (

    <div><Outlet/></div>
  )
}

export default AllowIfAuth