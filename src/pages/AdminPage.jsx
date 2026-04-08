import React, { useEffect } from 'react'
import { useUserStore } from '../stores/useUserStore'
import { useNavigate, Outlet, NavLink } from 'react-router-dom'
import { MdLogout, MdAdminPanelSettings } from 'react-icons/md'
import { adminRoute } from '../data'

const AdminPage = () => {
  const { user, logout } = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.role !== 'admin') {
      navigate("*")
    }
  }, [user, navigate])

  return (
    <section className='min-h-screen bg-[#f8f9fa] py-10 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-10 flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-black text-gray-900 flex items-center gap-3'>
              <MdAdminPanelSettings className='text-primary' size={36} /> Admin Dashboard
            </h1>
            <p className='text-gray-500 mt-2 font-medium'>Control center for Nadiitech platform</p>
          </div>
          <div className='hidden md:flex items-center gap-4 bg-white p-2 pr-6 rounded-full shadow-sm border border-gray-100'>
             <div className='w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold'>
                {user?.name?.charAt(0)}
             </div>
             <div className='text-sm'>
                <p className='font-bold text-gray-900'>{user?.name}</p>
                <p className='text-xs text-primary font-bold uppercase tracking-widest'>Administrator</p>
             </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-10'>
          {/* Admin Sidebar */}
          <aside className='w-full lg:w-72 shrink-0'>
            <div className='bg-white rounded-2xl shadow-sm border border-gray-100 sticky top-24 overflow-hidden'>
              <div className='p-6 bg-gray-50/50 border-b border-gray-100'>
                <p className='text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]'>Menu Management</p>
              </div>
              
              <nav className='p-4'>
                <ul className='space-y-2'>
                  {adminRoute.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <li key={index}>
                        <NavLink 
                          to={item.path} 
                          className={({ isActive }) => `
                            flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 font-bold text-sm
                            ${isActive 
                              ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]' 
                              : 'text-gray-500 hover:bg-gray-50 hover:text-primary'}
                          `}
                        >
                          <Icon size={22} />
                          <span>{item.name}</span>
                        </NavLink>
                      </li>
                    )
                  })}
                </ul>
                
                <div className='mt-8 pt-6 border-t border-gray-100'>
                  <button 
                    onClick={logout}
                    className='w-full flex items-center gap-3 px-5 py-4 text-gray-400 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-300 font-bold text-sm'
                  >
                    <MdLogout size={22} />
                    System Logout
                  </button>
                </div>
              </nav>
            </div>
          </aside>

          {/* Admin Content Area */}
          <main className='flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[600px]'>
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  )
}

export default AdminPage
