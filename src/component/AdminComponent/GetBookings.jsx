import React, { useEffect } from 'react'
import { contactStore } from '../../stores/contactStore'
import LoadingSpinner from '../LoadingSpinner'
import {Link} from 'react-router-dom'

const GetBookings = () => {
    const {loading, allBookings, bookings} = contactStore()

    useEffect(() => {
        allBookings()
    }, [allBookings])
    if(loading) return <LoadingSpinner />
  return (
    <div>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-4 text-primary'>All Bookings</h2>
        
        <table className='min-w-full'>
            <thead className='mt-5 bg-primary text-white'>
                <tr className=''>
                    <th className=''>No</th>
                    <th className='hidden lg:table-cell'>Name</th>
                    <th className='hidden lg:table-cell'>Phone</th>
                    <th>Date</th>
                    <th className='hidden lg:table-cell'>Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    bookings.map(({_id, name, phone, date, time}, i)=> {
                        return (
                        <tr key={_id} className=''>
                            <td className='p-3 px-4'>{i + 1}</td>
                            <td className='hidden lg:table-cell whitespace-break-spaces'>{name}</td>
                            <td className='hidden lg:table-cell'>{phone}</td>
                            <td>{date}</td>
                            <td className='hidden lg:table-cell'>{time}</td>
                            <td>
                                <Link
                                 to={`/admin-samuel/show-booking/${_id}`}
                                 className='p-3 px-5 rounded bg-primary text-white'
                                 >View
                                 </Link>
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default GetBookings