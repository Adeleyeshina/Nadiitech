import {ImSpinner3 } from "react-icons/im"
import Logo from "../assets/images/Logo.png"
import {useForm} from "react-hook-form"
import {Link} from 'react-router-dom'
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa"
import {useUserStore} from '../stores/useUserStore'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import LoadingSpinner from "../component/LoadingSpinner"

const Signup = () => {
  const navigate = useNavigate()
  const {register, handleSubmit, watch, formState : {errors}} = useForm()
  const [isPasswordShowing, setPasswordShowing] = useState(false)
  const [isConfirmShowing, setConfirmShowing] = useState(false)

  const{signup, loading} = useUserStore()


  const onSubmit = async (data) => {
    signup({...data, navigate })
  }
    const watchPassword = watch('password')
  return (
    <aside className="h-full bg-secondary pb-10">
    <div className='h-screen grid justify-center place-items-center py-5 px-3  gap-5'>
        <Link to={"/"}> <img src={Logo} alt="NadiiTech"  className='w-50'/></Link>
        <div className='md:min-w-[500px] bg-white mx-auto px-5 py-7 md:p-10 rounded-lg shadow'>
            <h2 className='font-bold text-[30px] text-center mb-5 text-primary'>Create Your Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="Name" className='text-sm font-semibold block my-3 text-left'>Full Name</label>
                <input type='text' className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                placeholder="John Doe"
                {...register("name", {
                  required : "The name is required",
                  minLength : {
                    value : 5,
                    message : "Name must be at least 5 characters long"
                  }
                })}
                />
                  {errors.name && <p className='text-red-600 ml-3 italic'>{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className='text-sm font-semibold block my-3 text-left'>Email address</label>
                <input type="email" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                placeholder="You@example.com"
                {...register("email", {
                  required : "The email is required",
                  pattern : {
                    value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message : "Invalid email address"
                  }
                })}
                />
                  {errors.email && <p className='text-red-600 ml-3 italic'>{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className='text-sm font-semibold block my-3 text-left'>Password</label>
                <div className="relative">
                <input type={isPasswordShowing ? 'text' : "password" } className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                placeholder="******"
                {...register("password", {
                  required : "The password in required",
                  minLength : {
                    value : 6,
                    message : "The password must be at least 6 characters long"
                  }
                })}
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-3 hover:cursor-pointer" onClick={()=> setPasswordShowing(prev => !prev)}>
                  {
                    isPasswordShowing ? <FaEyeSlash /> : <FaEye />
                  }
                </span>
                </div>
                  {errors.password && <p className='text-red-600 ml-3 italic'>{errors.password.message}</p>}
              </div>
              <div>
                <label htmlFor="confirm-password" className='text-sm font-semibold block my-3 text-left'>Confirm Password</label>
                <div className="relative">
                <input type={isConfirmShowing ? 'text' : "password" } className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                placeholder="******"
                {...register("confirmPassword", {
                  required : "Confirm Password",
                  validate (value) {
                    if(watchPassword !== value) {
                      return "Password not match"
                    }
                  }
                })}
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-3 hover:cursor-pointer" onClick={()=>setConfirmShowing(prev => !prev)}>
                  {
                    isConfirmShowing ? <FaEyeSlash /> : <FaEye />
                  }
                </span>
                </div>
                  {errors.confirmPassword && <p className='text-red-600 ml-3 italic'>{errors.confirmPassword.message}</p>}
              </div>
               <button className="bg-primary text-white mt-5 grid justify-center disabled:opacity-[.5] text-center w-full py-3 font-semibold rounded-lg text-xl hover:opacity-[.9]" 
               type="submit" disabled={loading}>
                {
                  loading ? (
                    <span className="flex gap-4 place-items-center">
                      <ImSpinner3 size={25} className="animate-spin"/>
                      Loading...
                    </span>
                  ) : <span>Sign up </span>
                }
               </button>
            </form>
        </div>

    </div>
      <p className="font-medium text-lg text-center">
           Already have an account? {" "}
           <Link to={"/login"} className="text-primary">Login here <FaArrowRight className="inline"/></Link>
        </p>
    </aside>
  )
}

export default Signup