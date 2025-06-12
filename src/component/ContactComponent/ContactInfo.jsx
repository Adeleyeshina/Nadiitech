import React from 'react'
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { contactStore } from '../../stores/contactStore'
import { ImSpinner3 } from 'react-icons/im'

const ContactInfo = () => {
    const {register, handleSubmit, reset, formState : {errors}} = useForm()
    const phone =  import.meta.env.VITE_PHONE_NO
    const whatsappNo = import.meta.env.VITE_WHATSAPP_NO
    const email = import.meta.env.VITE_EMAIL
    const address = import.meta.env.VITE_ADDRESS
    const Message = import.meta.VITE_WHATSAPP_MESSAGE

    const {loading, sendMessage} = contactStore()

    const onSubmit = async(data) => {
        try {
            await sendMessage(data, reset)

        } catch (error) {
            console(error)
        }
    }
  return (
    <section className='pt-10'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <div className='p-7 md:p-10 shadow rounded-lg'>
                <h3 className='font-bold text-[30px] mb-2'>Send Us a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-5'>
                    <div>
                        <label htmlFor="name" className='text-sm font-semibold block mb-3'>Full Name *</label>
                        <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                         placeholder='Enter your full name'
                            {...register("name", {
                                required : "Name is Required",
                                minLength : {
                                    value : 5,
                                    message : "Name must be atleast 5 charcters"
                                }
                            })}
                        />
                        {errors.name && <p className='text-red-600 ml-3 italic'>{errors.name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className='text-sm font-semibold block mb-3'>Phone Number *</label>
                        <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                         placeholder='+234800000000000'
                            {...register("phone", {
                                required : "phone is Required",
                                minLength : {
                                    value : 10,
                                    message : "Phone Number must be atleast 10 charcters"
                                }
                            })}
                        />
                        {errors.phone && <p className='text-red-600 ml-3 italic'>{errors.phone.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className='text-sm font-semibold block mb-3'>Email Address (Optional)</label>
                        <input type="email" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                         placeholder='you@emample.com'
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
                    <div>
                        <label htmlFor="subject" className='text-sm font-semibold block mb-3'>Subject</label>
                        <select className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                         {...register("subject")}>
                            <option value="">Select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Service Booking">Service Booking</option>
                            <option value="Product Support">Product Support</option>
                            <option value="Quotation Request">Quotation Request</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.subject && <p className='text-red-600 ml-3 italic'>{errors.subject.message}</p>}
                    </div>

                    <div className='text-area'>
                        <div className='mt-4'> 
                        <label htmlFor="message" className='text-sm font-semibold block mb-3'>Messaage *</label>
                        <textarea name="" 
                        id="" cols="50" 
                        rows={"5"} 
                        placeholder='How can we help you?'
                        className='w-full rounded-lg border border-gray-400 p-2 outline-primary resize-none'
                        {...register("message", {
                            required : "Message is required"
                        })}>         
                        </textarea>
                        {errors.message && <p className='text-red-600 ml-3 italic'>{errors.message.message}</p>}
                    </div>
          </div>

                    <button type='submit' className='bg-primary mx-3 mt-5 py-2 pb-3 text-lg font-semibold rounded-xl
                    text-white cursor-pointer hover:opacity-[.9] disabled:opacity-[.5] flex justify-center items-center gap-5' 
                    disabled={loading}>
                        {
                                loading ? (
                                <span className="flex gap-4 place-items-center">
                                    <ImSpinner3 size={25} className="animate-spin"/>
                                    Loading...
                                </span>
                                ) : <span className='flex justify-center items-center gap-5'><FaPaperPlane className=''/> Send Message</span>
                            }
                    </button>
                </form>
            </div>

            <div>
                <div className='p-10 shadow rounded-lg'>
                    <h3 className='font-bold text-[30px] mb-2'>Quick Contact Info</h3>
                    <div className='mt-5 grid gap-5'>
                        <div className='flex items-start gap-5'>
                            <button className='bg-secondary p-4 mb-2 rounded-full '>
                                <FaPhoneAlt size={20} fill='#F5871F'/>
                            </button>
                            <div>
                                <h3 className='font-semibold text-[20px] mb-1'>Phone</h3>
                                <p>{phone}</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-5'>
                            <button className='bg-secondary p-4 mb-2 rounded-full '>
                                <FaWhatsapp size={20} fill='#F5871F'/>
                            </button>
                            <div>
                                <h3 className='font-semibold text-[20px] mb-1'>WhatsApp</h3>
                                <Link to={`https://wa.me/${whatsappNo}?text=${encodeURIComponent(Message)}`} target='_blank' rel='noopener noreferrer'
                                className='px-5 py-3 rounded-lg bg-[#25d366] block text-white'>Chat Now</Link>
                            </div>
                        </div>
                        <div className='flex items-start gap-5'>
                            <button className='bg-secondary p-4 mb-2 rounded-full '>
                                <FaEnvelope size={20} fill='#F5871F'/>
                            </button>
                            <div>
                                <h3 className='font-semibold text-[20px] mb-1'>Email</h3>
                                <p>{email}</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-5'>
                            <button className='bg-secondary p-4 mb-2 rounded-full '>
                                <FaMapMarkerAlt size={20} fill='#F5871F'/>
                            </button>
                            <div>
                                <h3 className='font-semibold text-[20px] mb-1'>Office Address</h3>
                                <p>{address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactInfo