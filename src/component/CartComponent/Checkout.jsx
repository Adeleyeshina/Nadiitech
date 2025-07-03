import React, { useEffect, useState } from 'react'
import Address from '../AccountComponent/Address'
import { useCartStore } from '../../stores/useCartStore'
import { useUserStore } from '../../stores/useUserStore'
import AddressCard from '../AccountComponent/AddressCard'
import {toast} from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { ImSpinner3 } from 'react-icons/im'


const Checkout = () => {
  const {myAddress, address} = useUserStore()
  const [orderAddress, setOrderAddress] = useState(null)
  const [selected, setSelected] = useState(null)
    useEffect(() =>{
      myAddress()
    }, [myAddress])

    const {cart, total, checkout, loading} = useCartStore()

    const handleCheckout = ()=>{
      if(!orderAddress) {
        return toast.error("Please select a delivery address");
      }
      checkout(orderAddress._id)
    }

  return (
    <section className='flex flex-col md:flex-row gap-10 items-start'>
      <div className='lg:flex-2/3 w-full rounded-lg shadow-sm p-5 lg:p-10'>
        {
        address?.length > 0 ? 
        (
          <div className='grid grid-cols-1 overflow-hidden lg:grid-cols-2 gap-5 '>
            {
              address?.map((info, index)=> (
                 <div key={info._id} className={`border-2 ${selected === index ? 'border-primary' : "border-gray-400"} rounded-lg shadow `} onClick={()=> {setOrderAddress(info); setSelected(index)}}>
                  <AddressCard info={info} index={index}/>
                </div>
              )) 
            }
          </div> 
        ) : (
          <div className='text-center'>
            <h2 className='font-semibold text-center text-2xl'>No address found </h2>
            <Link to={"/account/address"}
              className='bg-primary mt-5 py-3 px-7 text-white font-semibold rounded-sm shadow-sm inline-block'
            >Add Address</Link>
          </div>)}
      </div>
        
        <div className='bg-white lg:flex-1/3 p-5 w-full rounded-lg shadow-sm space-y-4'>
          <h2 className='text-2xl font-semibold'>Order Summary </h2>
          
          <div className='space-y-5'>
            {
              cart.map((item) => (
                <div className='flex justify-between' key={item._id}> 
                  
                  <div className='flex gap-5 mr-5'>
                    <img src={item.featuredImage} alt={item.name} className='w-15'/>
                    <div className=''>
                      <h3 className='text-xl font-semibold'>{item.name}</h3>
                      <p className='font-normal'>Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className='font-normal'>₦{item.price.toLocaleString()}</p>
                </div>
              ))
            }

            <hr className='my-3 border-primary'/>
              <div className="flex justify-between text-lg mt-3 font-normal">
                <p>Total </p>
                <p>₦{total.toLocaleString()}</p>
              </div>
            <button className='block text-center cursor-pointer py-3.5 px-7 w-full mt-3 place-items-center font-semibold disabled:opacity-[.5] text-lg rounded-lg text-white
             bg-primary'
             onClick={handleCheckout}
             disabled={loading}
             >
              {
                loading ? (
                  <span className="flex gap-4 place-items-center">
                    <ImSpinner3 size={25} className="animate-spin"/>
                    Loading...
                  </span>
                ) : <span>Confirm Order</span>
              }
              </button>
          </div>
        </div>
    </section>
  )
}

export default Checkout