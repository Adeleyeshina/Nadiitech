import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ImSpinner3 } from 'react-icons/im'
import { useUserStore } from '../../stores/useUserStore'
import { MdCancelPresentation } from 'react-icons/md'

const AccountInfo = () => {
  const [modal, setModal] = useState(false)
    const{user, loading, updateInfo} = useUserStore()
  const {register, handleSubmit, formState : {errors}} = useForm({
    defaultValues : {
      firstname : user.firstname,
      lastname : user.lastname,
      email : user.email,
      phone : user.phone
    }
  }) 

  const onSubmit = async (data) => {
    updateInfo(data)
  }
  return (
    <div className='lg:p-10'>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='bg-white border-b border-gray-300 '>
            <h3 className='font-bold text-xl lg:text-[30px]'>Account Information</h3>
            <p className='text-lg py-3'>Manage your personal information and account setting</p>
          </div>

            <div className='grid gap-5'>
              <div>
                <div className='mt-4'> 
                    <label htmlFor="First Name" className='text-sm font-semibold block mb-3'>First Name</label>
                    <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                    placeholder='Enter your full name'
                    {...register("firstname", {
                      required : "First Name is required", 
                    minLength : {
                      value : 3,
                      message : "First Name must be at least 3 character long"
                    }})}
                    />
                    {errors.firstname && <p className='text-red-600 ml-3 italic'>{errors.firstname.message}</p>}
                </div>
                <div className='mt-4'> 
                    <label htmlFor="Last Name" className='text-sm font-semibold block mb-3'>Last Name</label>
                    <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                    placeholder='Enter your full name'
                    {...register("lastname", {
                      required : "Last Name is required",
                      minLength : {
                      value : 3,
                      message : "Last Name must be at least 3 character long"
                    }
                    })}
                    />
                    {errors.lastname && <p className='text-red-600 ml-3 italic'>{errors.lastname.message}</p>}
                </div>

                <div className='col-span-2 mt-4'>
                  <label htmlFor="Email" className='text-sm font-semibold block mb-3'>Email Address</label>
                  <input type="email" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                  placeholder='Enter your email address'
                  {...register("email", {
                    required : "Email is requied",
                   pattern : {
                    value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message : "Invalid email address"
                   }
                  })}
                  />
                  {errors.email && <p className='text-red-600 ml-3 italic'>{errors.email.message}</p>}
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
            <span onClick={() =>setModal(true)} className='bg-primary mt-5 text-center px-9 block py-2 pb-3 text-lg font-semibold rounded-xl
              text-white cursor-pointer hover:opacity-[.9] disabled:opacity-[.5] w-fit mx-auto' disabled={loading}>
                 {
                loading ? (
                <span className="flex gap-4 place-items-center">
                    <ImSpinner3 size={25} className="animate-spin"/>
                    Loading...
                </span>
                ) : <span className=''>Save Changes</span>
            }
            </span>




        {modal &&          
          <div className='bg-black/80 fixed top-0 left-0 w-screen h-screen z-20'>
            <div className='bg-white fixed grid place-items-center text-center top-1/2 left-1/2 -translate-1/2 min-w-[300px] min-h-[200px] p-10 rounded-2xl shadow'>
              <p className='text-xl font-semibold'>Confirm the update</p>
              <p>if you make changes to the email that will be your new login email</p>
              <button className='bg-primary px-10 py-3 mt-4 rounded-lg cursor-pointer hover:opacity-[.9] text-white disabled:opacity-[.5]' disabled={loading} >
                confirm
              </button>
              <MdCancelPresentation size={30} className='absolute top-3 cursor-pointer right-4' onClick={()=>setModal(prev => !prev)}/>
            </div>
          </div>
        }
        </form>


    </div>
  )
}

export default AccountInfo