import React from 'react'
import { ImSpinner3 } from 'react-icons/im'

const LoadingSpinner = () => {
  return (
    <div className='h-screen bg-secondary w-screen p-20'>
        <ImSpinner3 size={50} className='animate-spin' fill='#F5871F' />
    </div>
  )
}

export default LoadingSpinner