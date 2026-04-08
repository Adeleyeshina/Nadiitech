import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ImSpinner3 } from 'react-icons/im'
import { useUserStore } from '../../stores/useUserStore'
import { MdOutlineInfo, MdPersonOutline, MdMailOutline, MdPhoneIphone, MdEdit } from 'react-icons/md'

const AccountInfo = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [modal, setModal] = useState(false)
  const { user, loading, updateInfo } = useUserStore()

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstname: user?.firstname || '',
      lastname: user.lastname || '',
      email: user?.email || '',
      phone: user?.phone || ''
    }
  })

  const onSubmit = async (data) => {
    await updateInfo(data)
    setIsEditing(false)
    setModal(false)
  }

  if (!isEditing) {
    return (
      <div className='animate-in fade-in duration-500'>
        <div className='mb-10 flex justify-between items-start border-b border-gray-50 pb-8'>
          <div>
            <h2 className='text-2xl font-black text-gray-900'>Personal Profile</h2>
            <p className='text-gray-500 mt-1 text-sm'>Your account details and contact information</p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className='flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-xl font-bold hover:bg-primary hover:text-white transition-all text-sm shadow-sm'
          >
            <MdEdit size={18} /> Edit Profile
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl'>
          {/* Profile Card 1 */}
          <div className='bg-gray-50/50 p-6 rounded-2xl border border-gray-50 space-y-4'>
            <p className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>Full Name</p>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-gray-100'>
                <MdPersonOutline size={24} />
              </div>
              <div>
                <p className='text-lg font-bold text-gray-900'>{user?.firstname ? user.firstname + " " + user.lastname : user?.name}</p>
                <p className='text-xs text-gray-400'>Display Name</p>
              </div>
            </div>
          </div>

          {/* Profile Card 2 */}
          <div className='bg-gray-50/50 p-6 rounded-2xl border border-gray-50 space-y-4'>
            <p className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>Primary Email</p>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-gray-100'>
                <MdMailOutline size={24} />
              </div>
              <div className='overflow-hidden'>
                <p className='text-lg font-bold text-gray-900 truncate'>{user?.email}</p>
                <p className='text-xs text-gray-400'>Communication Channel</p>
              </div>
            </div>
          </div>

          {/* Profile Card 3 */}
          <div className='bg-gray-50/50 p-6 rounded-2xl border border-gray-50 space-y-4 md:col-span-2'>
            <p className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>Phone Number</p>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-gray-100'>
                <MdPhoneIphone size={24} />
              </div>
              <div>
                <p className='text-lg font-bold text-gray-900'>{user?.phone || 'Not provided'}</p>
                <p className='text-xs text-gray-400'>Contact Verification</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4'>
          <MdOutlineInfo size={24} className='text-primary shrink-0' />
          <div>
            <p className='text-sm font-bold text-primary'>Profile Security</p>
            <p className='text-xs text-gray-600 mt-1 leading-relaxed italic'>
              Your personal information is stored securely. If you need to change your registered email, please be aware that it will serve as your new login identifier.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='animate-in fade-in slide-in-from-right-4 duration-500'>
      <div className='mb-10 flex justify-between items-center border-b border-gray-50 pb-8'>
        <div>
          <h2 className='text-2xl font-black text-gray-900'>Update Profile</h2>
          <p className='text-gray-500 mt-1 text-sm'>Modify your account credentials</p>
        </div>
        <button
          onClick={() => setIsEditing(false)}
          className='text-gray-400 hover:text-gray-900 font-bold text-sm'
        >
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='max-w-3xl space-y-8'>
        <div className='grid grid-cols-1 gap-8'>
          <div className='space-y-2'>
            <label className='text-sm font-bold text-gray-700'>First Name</label>
            <input
              type="text"
              className={`w-full rounded-xl border ${errors.firstname ? 'border-red-300' : 'border-gray-200'} px-4 py-4 text-gray-700 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all`}
              {...register("firstname", { required: "Name is required" })}
            />
            {errors.firstname && <p className='text-red-500 text-xs font-semibold mt-1'>{errors.firstname.message}</p>}
          </div>
          <div className='space-y-2'>
            <label className='text-sm font-bold text-gray-700'>Last Name</label>
            <input
              type="text"
              className={`w-full rounded-xl border ${errors.lastname ? 'border-red-300' : 'border-gray-200'} px-4 py-4 text-gray-700 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all`}
              {...register("lastname", { required: "Name is required" })}
            />
            {errors.lastname && <p className='text-red-500 text-xs font-semibold mt-1'>{errors.lastname.message}</p>}
          </div>
          <div className='space-y-2'>
            <label className='text-sm font-bold text-gray-700'>Email Address</label>
            <input
              type="email"
              className={`w-full rounded-xl border ${errors.email ? 'border-red-300' : 'border-gray-200'} px-4 py-4 text-gray-700 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className='text-red-500 text-xs font-semibold mt-1'>{errors.email.message}</p>}
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-bold text-gray-700'>Phone Number</label>
            <input
              type="text"
              className={`w-full rounded-xl border ${errors.phone ? 'border-red-300' : 'border-gray-200'} px-4 py-4 text-gray-700 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all`}
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && <p className='text-red-500 text-xs font-semibold mt-1'>{errors.phone.message}</p>}
          </div>
        </div>

        <div className='pt-8 border-t border-gray-50 flex gap-4'>
          <button
            type="button"
            onClick={() => setModal(true)}
            className='bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-3 disabled:opacity-50'
            disabled={loading}
          >
            {loading ? <ImSpinner3 className="animate-spin" size={20} /> : 'Save Changes'}
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className='px-10 py-4 rounded-xl border border-gray-200 text-gray-500 font-bold hover:bg-gray-50 transition-all'
          >
            Cancel
          </button>
        </div>

        {modal && (
          <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm'>
            <div className='bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative animate-in fade-in zoom-in duration-300'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-5'>
                  <MdOutlineInfo size={34} />
                </div>
                <h4 className='text-xl font-black text-gray-900 mb-2'>Confirm Profile Update</h4>
                <p className='text-gray-500 mb-8 text-sm leading-relaxed'>
                  Are you sure you want to update your details? If you change your email, you will need to use the new one for your next login.
                </p>
                <div className='grid grid-cols-2 gap-4'>
                  <button onClick={() => setModal(false)} className='px-6 py-3.5 rounded-xl border border-gray-100 text-gray-500 font-bold hover:bg-gray-50 transition-all text-sm'>
                    Go Back
                  </button>
                  <button onClick={handleSubmit(onSubmit)} className='px-6 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-sm'>
                    {loading ? <ImSpinner3 className="animate-spin mx-auto" size={20} /> : 'Confirm'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default AccountInfo
