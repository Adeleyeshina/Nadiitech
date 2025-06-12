import React, { useEffect } from 'react'
import {useUserStore} from '../stores/useUserStore'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FaMapMarkerAlt, FaRegUser, FaShoppingBag } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import Icon from '../assets/images/icon.png'
const Account = () => {
  const {user, logout} = useUserStore()
  const navigate = useNavigate()
  useEffect(() => {
    if (user?.role ==='admin') {
      navigate("/admin-samuel")
    } 
  }, [])
  const userRoute = [{path : 'info', name : "Account Info", icon : <FaRegUser size={25}/>},
    {path : 'order', name : "Order History", icon : <FaShoppingBag size={25}/>},{path : 'address', name : "Addresses", icon : <FaMapMarkerAlt size={25}/>},]
    
  return (

    <section className='flex items-start flex-col sm:flex-row gap-5 lg:gap-10 bg-ash '>
      <div className='text-xl font-semibold bg-white p-7 rounded-lg shadow w-full md:flex-1/3 lg:flex-1/4'>
        <div className='grid justify-center text-center'>
          <img src={Icon} alt="" className='mx-auto'/>
          <h3>{user?.name}</h3>
         <p>{user?.email}</p>
        </div>
        <NavLink to="/"/>
        <ul className=''>
          {
            userRoute.map((items, index) => {
               return <li key={index}>
                <NavLink to={items.path} className={ ({isActive}) => isActive ? 'text-primary' : '' }>
                  <span className=' flex gap-3 my-9'>
                    {items.icon} 
                    {items.name}
                  </span>
                </NavLink>
              </li>      
            })
          }
          <button className='hover:cursor-pointer' onClick={logout}> <MdLogout size={30} className='inline-block mr-3'/> Logout</button>
        </ul>

      </div>




      <section className='bg-white p-7 shadow rounded-lg grow w-full md:flex-2/3 flex-3/4 '>
        <Outlet />
      </section>
    </section>
  )
}

export default Account