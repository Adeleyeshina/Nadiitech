import React from 'react'

const AddressCard = ({info, index}) => {

  return (
    <aside className=''>
        <div className='p-5 whitespace-break-spaces lg:p-10 space-y-2.5'>
            <h3>Address : {index + 1}</h3>
            <p>Street : {info.street}</p>
            <p>City : {info.city}</p>
            <p>State : {info.state}</p>
            <p>Country : {info.country}</p>
            <p>Phone : {info.phone}</p>
        </div>
   </aside>
  )
}

export default AddressCard