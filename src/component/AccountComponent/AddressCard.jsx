import React from 'react'
import { MdPhone, MdLocationOn } from 'react-icons/md'

const AddressCard = ({ info, index }) => {
  return (
    <div className='p-6'>
      <div className='flex items-center justify-between mb-4'>
        <span className='px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider'>
          Default Address {index + 1}
        </span>
      </div>
      
      <div className='space-y-4'>
        <div className='flex items-start gap-3'>
          <div className='mt-1 text-gray-400'>
            <MdLocationOn size={20} />
          </div>
          <div className='overflow-hidden'>
            <p className='text-gray-900 font-bold leading-tight truncate'>{info.street}</p>
            <p className='text-gray-500 text-sm mt-1'>{info.city}, {info.state}</p>
            <p className='text-gray-500 text-sm'>{info.country}</p>
          </div>
        </div>

        <div className='flex items-center gap-3 pt-4 border-t border-gray-50'>
          <div className='text-gray-400'>
            <MdPhone size={18} />
          </div>
          <p className='text-gray-600 text-sm font-semibold'>{info.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
