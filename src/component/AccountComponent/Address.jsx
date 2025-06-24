import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import AddressCard from './AddressCard'
import { useUserStore } from '../../stores/useUserStore'
import LoadingSpinner from '../LoadingSpinner'
import { ImSpinner3 } from 'react-icons/im'

const Address = () => {
  const formRef = useRef(null)
  // User Stores
  const {address, loading, myAddress, addAddress, checkingAuth, deleteAddress, updateAddress} = useUserStore()
  const [editAddress, setEditAddress] = useState(false)
  const [editId, setEditId] = useState(null)
  useEffect(() =>{
    myAddress()
  }, [myAddress])
  const {register, handleSubmit, reset,formState : {errors}} = useForm({
  })

    function handleEdit(info) {
      setEditAddress(true)
      setEditId(info._id)
      reset(info)
      formRef.current?.scrollIntoView({behaviour : 'smooth'})
    }
    const onSubmit = async (data) => {
      if (editAddress){
         return updateAddress(data, reset, setEditAddress)      
      }
       addAddress(data, reset)
    }
 if(checkingAuth) return <LoadingSpinner />
  return (
    <div>
      {
        address?.length > 0 ? 
        (
          <div className='grid grid-cols-1 overflow-hidden lg:grid-cols-2 gap-5 '>
            {
              address?.map((info, index)=> {
                return <div key={info._id} className='border-2 border-primary rounded-lg shadow'>
                  <AddressCard info={info} index={index}/>
                  <div className='flex gap-2 justify-between place-items-center px-5 lg:px-10 pb-7'>
                  <button onClick={() =>{handleEdit(info)}
                    }
                   className='py-3 px-7 text-white bg-blue-700 font-semibold hover:cursor-pointer 
                    rounded hover:opacity-[.9] shadow'>Edit
                  </button>
                  <button onClick={()=>deleteAddress(info._id)} className='py-3 px-7 bg-red-800 text-white font-semibold hover:cursor-pointer
                   rounded hover:opacity-[.9] shadow'>Delete
                  </button>  
                  </div> 
                </div>
              }) 
            }
          </div> 
        ) : (
          <div>
            <h2 className='font-semibold text-center text-2xl'>No address found </h2>
          </div>
        )
      }

      {/* Addrress Form */}
      <div className='mt-10'>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} >
          <div className='bg-white'>
            <h3 className='font-bold text-xl lg:text-[30px] text-center'>
              {editAddress ? 'Edit Address' : 'Add new Address' }</h3>
          </div>

            <div className='grid gap-5'>
              <div>
                <div className='mt-4'> 
                    <label htmlFor="street" className='text-sm font-semibold block mb-3'>Street</label>
                    <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                    placeholder='Enter your street'
                    {...register("street", {
                      required : "Street is required"})}
                    />
                    {errors.street && <p className='text-red-600 ml-3 italic'>{errors.street.message}</p>}
                </div>
                <div className='mt-4'> 
                    <label htmlFor="city" className='text-sm font-semibold block mb-3'>City</label>
                    <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                    placeholder='Enter your city'
                    {...register("city", {
                      required : "City is required"})}
                    />
                    {errors.city && <p className='text-red-600 ml-3 italic'>{errors.city.message}</p>}
                </div>
                <div className='mt-4'> 
                    <label htmlFor="state" className='text-sm font-semibold block mb-3'>State</label>
                    <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                    placeholder='Enter your State'
                    {...register("state", {
                      required : "State is required"
                    })}
                    />
                    {errors.state && <p className='text-red-600 ml-3 italic'>{errors.state.message}</p>}
                </div>

                <div className='col-span-2 mt-4'>
                  <label htmlFor="Country" className='text-sm font-semibold block mb-3'>Country</label>
                  <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                  placeholder='Enter your country'
                  {...register("country", {
                    required : "Country is required",
                  })}
                  />
                  {errors.country && <p className='text-red-600 ml-3 italic'>{errors.country.message}</p>}
                </div>
                <div className='mt-4'>
                  <label htmlFor="Phone" className='text-sm font-semibold block mb-3'>Phone Number *</label>
                  <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                  placeholder='Enter your phone number'
                  {...register("phone", {
                    required : "Phone is required",
                    minLength : {
                      value : 10,
                      message : "Phone number must be atleast 10 characters"
                    }
                  })}
                  />
                  {errors.phone && <p className='text-red-600 ml-3 italic'>{errors.phone.message}</p>}
                </div>
              </div>
            </div>
            <button className='bg-primary mt-5 text-center px-9 block py-2 pb-3 text-lg font-semibold rounded-xl
              text-white cursor-pointer hover:opacity-[.9] disabled:opacity-[.5] w-fit mx-auto' disabled={loading}>
                  {
                loading ? (
                <span className="flex gap-4 place-items-center">
                    <ImSpinner3 size={25} className="animate-spin"/>
                    Loading...
                </span>
                ) : editAddress ? <span className='' >Save changes</span> 
                : <span  className=''>Add Address</span>
            }
            </button>



        </form>
      </div>
    </div>
  )
}

export default Address