import React from 'react'
import { useForm } from 'react-hook-form'
import { FaCalendarAlt, FaTools } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri'
import {serviceList} from '../data'

const BookingForm = ({className, title}) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const selected = watch('service')
  const usersDate = watch('date')
  const onSubmit = async (data) =>{


    alert(JSON.stringify(data))
  }
  
  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className='grid'>
      <h3 className='font-bold text-[30px]'>{title}</h3>
        <div className='mt-3'>
          {/* Personal Information (name, phone number email) */}
          <div className='personal-info'> 
            {/* Labels That shows in booking form*/}
              <span className='flex gap-3 place-items-center mb-3'>
                <RiAccountCircleFill fill='#F5871F' size={30}/>
                <p  className='font-semibold text-xl'>Personal Information</p>
              </span>
              
              {/* For all input in Personal Information*/}
              <div className='mx-7 info'>
                {/* Each input */}
                <div className='mt-4'> 
                  <label htmlFor="Name" className='text-sm font-semibold block mb-3'>Your Name *</label>
                  <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                  placeholder='Enter your full name'
                  {...register("name", {
                    required : "Name is required",
                    minLength : {
                      value : 5,
                      message : "Name must be atleast 5 characters"
                    }
                  })}
                  />
                  {errors.name && <p className='text-red-600 ml-3 italic'>{errors.name.message}</p>}
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
                <div className='col-span-2 mt-4'>
                  <label htmlFor="Email" className='text-sm font-semibold block mb-3'>Email Address (Optional)</label>
                  <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                  placeholder='Enter your email address'
                  {...register("email", {
                    required : false,
                   pattern : {
                    value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message : "Invalid email address"
                   }
                  })}
                  />
                  {errors.email && <p className='text-red-600 ml-3 italic'>{errors.email.message}</p>}
                </div>
              </div>
          </div>

          {/* Services details  */}
          <div className='mt-4 service-info'>
            {/* Labels That shows the services form*/}
              <span className='flex gap-3 place-items-center mb-3'>
                <FaTools fill='#F5871F' size={25}/>
                <p  className='font-semibold text-xl'>
                  Service Details
                </p>
              </span>
              
              {/* For the service options */}
              <div className='mx-7'>
              <label htmlFor="Phone" className='text-sm font-semibold block mb-3'>Select Service *</label>
                <select  name="Service" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                  {...register('service', {
                    required : "Service is required"
                  })}
                >
                  <option value="">Select a service category</option>
                  {
                    serviceList.map(({id,title}) => {
                     return <option key={id} value={title} className='hover:bg-primary'>{title}</option>
                    })
                  }
                  <option value="Other">Other Service</option>
                </select>
                {errors.service && <p className='text-red-600 ml-3 italic'>{errors.service.message}</p>}

                {selected ==="Other" && (
                    <div className='mt-3'> 
                      <label htmlFor="Other" className='text-sm font-semibold block mb-3'>Other service *</label>
                      <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                      placeholder='Specify the Service'
                      {...register("otherService", {
                        required : "Other service is required", 
                      })}
                      />
                    {errors.otherService && <p className='text-red-600 ml-3 italic'>{errors.otherService.message}</p>}
                  </div>
                )}
              </div>
          </div>

          {/* Schedule  */}
          <div className='mt-4 schedule'>
            {/* Labels That shows the Schedule form*/}
              <span className='flex gap-3 place-items-center mb-3'>
                <FaCalendarAlt fill='#F5871F' size={25}/>
                <p  className='font-semibold text-xl'>
                  Schedule
                </p>
              </span>
              
              {/* For the schedule options */}
              <div className='mx-7 grid gap-y-3 info'>
                <div className=''> 
                  <label htmlFor="date" className='text-sm font-semibold block mb-3'>Prefered Date *</label>
                  <input
                    type="date"
                    className="w-full rounded-lg border border-gray-400 p-2 outline-primary"
                    placeholder="Select date"
                    {...register("date", {
                      required: "Date is required",
                      validate: (value) => {
                        const [year, month, day] = value.split("-").map(Number);
                        const inputDate = new Date(year, month - 1, day); // JS months are 0-based
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                  
                        if (inputDate < today) {
                          return "Date cannot be in the past";
                        }
                        return true;
                      },
                    })}
                  />
                    {errors.date && <p className='text-red-600 ml-3 italic'>{errors.date.message}</p>}
                </div>
                <div className=''> 
                  <label htmlFor="time" className='text-sm font-semibold block mb-3'>Prefered time *</label>
                  <input
                    type="time"
                    className="w-full rounded-lg border border-gray-400 p-2 outline-primary"
                    placeholder="Select time"
                    {...register("time", {
                      required: "Time is required",
                      validate: (value) => {
                        if (!usersDate)  {
                          return "You need to input date first"
                        }; // Wait until a date is selected
                  
                        const [year, month, day] = usersDate.split("-").map(Number);
                        const [inputHour, inputMinute] = value.split(":").map(Number);
                  
                        const selectedDate = new Date(year, month - 1, day);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                  
                        const selectedDateTime = new Date(year, month - 1, day, inputHour, inputMinute);
                        const oneHourLater = new Date();
                  
                        oneHourLater.setHours(oneHourLater.getHours() + 1);
                  
                        // If selected date is today, validate time
                        if (selectedDate.getTime() === today.getTime()) {
                          if (selectedDateTime < oneHourLater) {
                            return "For today, time must be at least 1 hour from now";
                          }
                        }
                  
                        return true;
                      },
                  
                    })}
                  />

                    {errors.time && <p className='text-red-600 ml-3 italic'>{errors.time.message}</p>}
                </div>
              </div>
          </div>
        </div>
        <div>
          
          {/* For Additional notes*/}
          <div className='mx-7 text-area'>
            <div className='mt-4'> 
              <label htmlFor="Name" className='text-sm font-semibold block mb-3'>Additional Notes</label>
              <textarea name="" 
              id="" cols="50" 
              rows={"5"} 
              placeholder='Tell us more about your requirements...'
              className='w-full rounded-lg border border-gray-400 p-2 outline-primary resize-none'
              {...register("Additional-notes")}>         
              </textarea>
            </div>
          </div>
        </div>
        <button type='submit' className='bg-primary mx-7 mt-5 py-2 pb-3 text-lg font-semibold rounded-xl
         text-white cursor-pointer hover:opacity-[.9]'>
          Book Now
        </button>
      </form>
    </div>
  )
}

export default BookingForm