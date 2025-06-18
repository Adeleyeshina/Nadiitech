import React from 'react'
import { ImSpinner3 } from 'react-icons/im'

const LoadingSpinner = () => {
  return (
    <div className='h-screen bg-secondary fixed w-screen z-50'>
        <ImSpinner3 size={90} className='animate-spin absolute top-1/2 left-1/2 -translate-1/2' fill='#F5871F' />
    </div>
  )
}

export default LoadingSpinner