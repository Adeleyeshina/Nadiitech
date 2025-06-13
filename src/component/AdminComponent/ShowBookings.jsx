import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { contactStore } from '../../stores/contactStore'
import LoadingSpinner from '../LoadingSpinner'

const ShowBookings = () => {
    const {id} = useParams()
    const {singleBooking, Book, loading} = contactStore()
    useEffect(()=> {
        singleBooking(id)
    },[])
    if(loading) return <LoadingSpinner />
  return (
    <div>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-4 text-primary'>Booking Details</h2>
        <div className='mt-10 break-all border-primary p-5 lg:p-10 space-y-5'>
            <div className='flex flex-col lg:flex-row gap-3'>
                <p className='font-bold text-xl'>Name :</p>
                <span className='text-lg'>{Book?.name}</span>
            </div>
            <div className='flex flex-col lg:flex-row gap-3'>
                <p className='font-bold text-lg'>Phone Number :</p>
                <span className='text-lg'>{Book?.phone}</span>
            </div>
            <div className='flex flex-col lg:flex-row gap-3'>
                <p className='font-bold text-lg'>Email Address :</p>
                <span className='text-lg'>{Book?.email || "N/A"}</span>
            </div>
            <div className='flex flex-col lg:flex-row gap-3'>
                <p className='font-bold text-lg'>Service :</p>
                <span className='text-lg'>{Book?.service === "Other" ? Book.otherService : Book?.service}</span>
            </div>
            <div className='flex flex-col lg:flex-row gap-3'>
                <p className='font-bold text-lg'>Date :</p>
                <span className='text-lg'>{Book?.date}</span>
            </div>
            <div className='flex flex-col lg:flex-row gap-3'>
                <p className='font-bold text-lg'>Time :</p>
                <span className='text-lg'>{Book?.time}</span>
            </div>
            <div className='flex flex-col lg:flex-row gap-3'>
                <p className='font-bold text-lg'>Notes :</p>
                <span className='text-lg'>{Book?.note || "N/A"}</span>
            </div>
        </div>
    </div>
  )
}

export default ShowBookings