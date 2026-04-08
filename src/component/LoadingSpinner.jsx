import React from 'react'
import { ImSpinner2, ImSpinner3 } from 'react-icons/im'

export const LoadingDataSpinner = ({ fullPage = true }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${fullPage ? 'min-h-[60vh] w-full' : 'py-10'}`}>
      <div className="relative">
        <ImSpinner2 className="text-primary animate-spin" size={48} />
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      </div>
      <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.3em] animate-pulse">
        Loading Data
      </p>
    </div>
  )
}





const LoadingSpinner = () => {
  return (
    <div className='h-screen bg-secondary fixed w-full '>
      <ImSpinner3 size={90} className='animate-spin absolute top-1/2 left-1/2 -translate-1/2' fill='#F5871F' />
    </div>
  )
}

export default LoadingSpinner
