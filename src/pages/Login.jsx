import {ImSpinner3 } from "react-icons/im"
import Logo from "../assets/images/Logo.png"
import {useForm} from "react-hook-form"
import {Link, useNavigate} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import { useUserStore } from "../stores/useUserStore"
import { useEffect } from "react"
import LoadingSpinner from "../component/LoadingSpinner"

const Login = () => {
  const {register, handleSubmit, formState : {errors}} = useForm()
 const {loading, login, checkAuth, user, checkingAuth} = useUserStore()
 const navigate = useNavigate()

 useEffect(() => {
  checkAuth()
 },[checkAuth])

  const onSubmit = async (data) => {
    login(data)
  }
  if(checkingAuth) return <LoadingSpinner />
  return (
        <aside className='bg-secondary grid justify-center place-items-center py-5 px-3  gap-5 h-screen'>
            <img src={Logo} alt="NadiiTech"  className='w-50'/>
            <div className='min-w-[300px] md:min-w-[500px] bg-white mx-auto px-5 py-7 md:p-10 rounded-lg shadow'>
                <h2 className='font-bold text-[30px] text-center mb-5 text-primary'>Login</h2>
                <form action={handleSubmit(onSubmit)}>
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
                    <input type="password" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                    placeholder="******"
                    {...register("password", {
                      required : "The password in required",
                      minLength : {
                        value : 6,
                        message : "The password must be at least 6 characters long"
                      }
                    })}
                    />
                      {errors.password && <p className='text-red-600 ml-3 italic'>{errors.password.message}</p>}
                  </div>
                   <button className="bg-primary text-white mt-5 grid justify-center disabled:opacity-[.5] text-center w-full py-3 font-semibold rounded-lg text-xl hover:opacity-[.9]" 
                   type="submit" disabled={loading}>
                    {
                      loading ? (
                        <span className="flex gap-4 place-items-center">
                          <ImSpinner3 size={25} className="animate-spin"/>
                          Loading...
                        </span>
                      ) : <span>Login</span>
                    }
                   </button>
                   <Link to={"/forgot-password"} className="block mt-3 text-center ">forgot Password?</Link>
                </form>
            </div>
    
            <p className="font-medium text-lg">
               Not a member? {" "}
               <Link to={"/signup"} className="text-primary">Sign up now <FaArrowRight className="inline"/></Link></p>
        </aside>
  )
}

export default Login