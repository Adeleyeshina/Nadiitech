import React, { useEffect } from 'react'
import { useUserStore } from '../stores/useUserStore'
import { useNavigate, Outlet, NavLink } from 'react-router-dom'
import { FaMapMarkerAlt, FaRegUser, FaShoppingBag } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'

const Account = () => {
  const { user, logout } = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.role === 'admin') {
      navigate("/admin-samuel/products")
    }
  }, [user, navigate])

  const userRoute = [
    { path: 'info', name: "My Profile", icon: <FaRegUser size={18} /> },
    { path: 'order', name: "Order History", icon: <FaShoppingBag size={18} /> },
    { path: 'address', name: "Delivery Addresses", icon: <FaMapMarkerAlt size={18} /> },
  ]

  return (
    <section className='min-h-screen bg-[#fcfcfc] py-10 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-3xl font-extrabold text-gray-900'>My Account</h1>
          <p className='text-gray-500 mt-2'>Manage your profile, orders and addresses</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Professional Sidebar */}
          <aside className='w-full lg:w-72 shrink-0'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-100 sticky top-24'>
              <div className='p-6 flex items-center gap-4 border-b border-gray-50'>
                <div className='w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold border border-primary/20 shrink-0'>
                  {user?.name?.charAt(0) || user?.email?.charAt(0)}
                </div>
                <div className='overflow-hidden'>
                  <h3 className='font-bold text-gray-900 truncate'>{user?.name}</h3>
                  <p className='text-xs text-gray-400 truncate'>{user?.email}</p>
                </div>
              </div>
              
              <nav className='p-3'>
                <ul className='space-y-1'>
                  {userRoute.map((item, index) => (
                    <li key={index}>
                      <NavLink 
                        to={item.path} 
                        className={({ isActive }) => `
                          flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium
                          ${isActive 
                            ? 'bg-primary text-white shadow-sm' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}
                        `}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
                
                <div className='mt-4 pt-4 border-t border-gray-50'>
                  <button 
                    onClick={logout}
                    className='w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-200 font-medium'
                  >
                    <MdLogout size={18} />
                    Logout
                  </button>
                </div>
              </nav>
            </div>
          </aside>

          {/* Dynamic Content Area */}
          <main className='flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden min-h-[500px]'>
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  )
}

export default Account
