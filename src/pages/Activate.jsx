
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/images/Logo.png";
import { FaArrowRight } from 'react-icons/fa';
import axios from '../lib/axios';
import { toast } from 'react-hot-toast';
import { useUserStore } from '../stores/useUserStore';
import LoadingSpinner from '../component/LoadingSpinner';

const Activate = () => {
  const navigate = useNavigate()
    const {user, checkAuth, checkingAuth} = useUserStore()
    const {token} = useParams()
    const [status, setStatus] = useState(null)
    const [errors, setErrors] = useState('')
    const hasRun = useRef(false);
    useEffect(() => {
        checkAuth ()
        user && navigate("/")
        setStatus('pending')
        if (hasRun.current) return;
        const activateAccount = async () => {
            try {
                const res = await axios.get(`auth/verify/${token}`)
                setStatus('success');
                toast.success(res.data.message);
            } catch (error) {
                setStatus('error')
                setErrors(error.response.data.message)
                toast.error(error.response.data.message)
            }
        }
    if (token) {
    hasRun.current = true;
    activateAccount();
  }
    }, [token, checkAuth])
  if(checkingAuth) return <LoadingSpinner />
     return (
    <aside className='bg-secondary h-screen pt-30 flex flex-col gap-5 p-7'>
      <img src={Logo} alt="NadiiTech" className='w-50 mx-auto' />
      {
        status === "pending" ? (
          <h2 className='font-bold text-[30px] text-center mb-5 text-black'>
            Activating your account...
          </h2>
        ) : status === "success" ? (
          <div>
            <h2 className='font-bold text-[30px] text-center mb-5 text-black'>
              Account activated — return to login page
            </h2>
            <Link to="/login" className="text-primary flex justify-center items-center gap-3">
              Login here <FaArrowRight />
            </Link>
          </div>
        ) : (
          <div>
            <h2 className='font-bold text-[30px] text-center mb-5 text-black'>
              {errors}
            </h2>
            <Link to="/forgot-password" className="text-primary flex justify-center items-center gap-3">
              You can go to forgot password to request for another link
            </Link>
          </div>
        )
      }
    </aside>
  );
}

export default Activate