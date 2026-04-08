import React, { useEffect, useState } from 'react'
import { contactStore } from '../../stores/contactStore'
import LoadingSpinner, { LoadingDataSpinner } from '../LoadingSpinner'
import { MdOutlineCalendarMonth, MdOutlineRemoveRedEye } from 'react-icons/md'
import BookingModal from './BookingModal'

const GetBookings = () => {
    const { loading, allBookings, bookings } = contactStore()
    const [selectedBooking, setSelectedBooking] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        allBookings()
    }, [allBookings])

    const handleViewDetails = (booking) => {
        setSelectedBooking(booking)
        setIsModalOpen(true)
    }

    if (loading && bookings.length === 0) return <LoadingDataSpinner />

    return (
        <div className=''>
            <div className='mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-50 pb-8'>
                <div>
                    <h2 className='text-2xl font-black text-gray-900'>Service Bookings</h2>
                    <p className='text-gray-500 text-sm mt-1'>View and respond to customer service requests</p>
                </div>
                <div className='bg-primary/5 px-4 py-2 rounded-lg border border-primary/10'>
                    <p className='text-primary font-bold text-sm flex items-center gap-2'>
                        <MdOutlineCalendarMonth /> Total: {bookings.length} Bookings
                    </p>
                </div>
            </div>

            <div className='overflow-x-auto border border-gray-100 rounded-2xl shadow-sm'>
                <table className='w-full text-left border-collapse min-w-[600px]'>
                    <thead>
                        <tr className='bg-gray-50/50 border-b border-gray-100'>
                            <th className='px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest'>Customer</th>
                            <th className='hidden lg:table-cell px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest'>Contact</th>
                            <th className='px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest'>Schedule</th>
                            <th className='px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest text-right'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-50'>
                        {bookings.map((booking, i) => (
                            <tr key={booking._id} className='hover:bg-gray-50/30 transition-colors'>
                                <td className='px-6 py-5 whitespace-nowrap'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-400'>
                                            {i + 1}
                                        </div>
                                        <p className='text-sm font-bold text-gray-900'>{booking.name}</p>
                                    </div>
                                </td>
                                <td className='hidden lg:table-cell px-6 py-5 whitespace-nowrap'>
                                    <p className='text-sm text-gray-500 font-medium'>{booking.phone}</p>
                                </td>
                                <td className='px-6 py-5 whitespace-nowrap'>
                                    <div className='flex flex-col'>
                                        <span className='text-sm font-bold text-gray-900'>{booking.date}</span>
                                        <span className='text-xs text-primary font-bold'>{booking.time}</span>
                                    </div>
                                </td>
                                <td className='px-6 py-5 text-right whitespace-nowrap'>
                                    <button
                                        onClick={() => handleViewDetails(booking)}
                                        className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all'
                                    >
                                        <MdOutlineRemoveRedEye size={16} /> View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {bookings.length === 0 && (
                <div className='text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100 mt-6'>
                    <p className='text-gray-400 font-bold'>No bookings found.</p>
                </div>
            )}

            {isModalOpen && (
                <BookingModal
                    booking={selectedBooking}
                    onClose={() => {
                        setIsModalOpen(false)
                        setSelectedBooking(null)
                    }}
                />
            )}
        </div>
    )
}

export default GetBookings
