import {ImSpinner3 } from "react-icons/im"
import Logo from "../assets/images/Logo.png"
import {useForm} from "react-hook-form"
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"

const ResetPassword = () => {
    const loading = false
    const {register, handleSubmit, watch, formState : {errors}} = useForm()
     const onSubmit = async (data) => {
    alert(JSON.stringify(data))
  }
    const watchPassword = watch('password')
  return (
      <aside className='h-screen bg-secondary grid justify-center place-items-center py-5 px-3  gap-5'>
        <img src={Logo} alt="NadiiTech"  className='w-50'/>
        <div className='min-w-[300px] md:min-w-[500px] bg-white mx-auto px-5 py-7 md:p-10 rounded-lg shadow'>
            <h2 className='font-bold text-[30px] text-center mb-5 text-primary'>Reset Password</h2>
            <form action={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="password" className='text-sm font-semibold block my-3 text-left'>New Password</label>
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
              <div>
                <label htmlFor="confirm-password" className='text-sm font-semibold block my-3 text-left'>Confirm New Password</label>
                <input type="password" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
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
                  ) : <span>Reset Password </span>
                }
               </button>
            </form>
        </div>

        <p className="font-medium text-lg">
           Already have an account? {" "}
           <Link to={"/login"} className="text-primary">Login here <FaArrowRight className="inline"/></Link></p>
    </aside>
  )
}

export default ResetPassword