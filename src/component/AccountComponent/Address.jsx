import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import AddressCard from './AddressCard'
import { useUserStore } from '../../stores/useUserStore'
import { ImSpinner3 } from 'react-icons/im'
import { MdAdd, MdEdit, MdDeleteOutline, MdClose, MdInfoOutline, MdWarningAmber } from 'react-icons/md'

const Address = () => {
  const { address, loading, myAddress, addAddress, deleteAddress, updateAddress } = useUserStore()
  const [showForm, setShowForm] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [deletingId, setDeletingId] = useState(null)
  const [idToDelete, setIdToDelete] = useState(null)

  useEffect(() => {
    myAddress()
  }, [myAddress])

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const handleEdit = (info) => {
    setEditMode(true)
    setShowForm(true)
    reset(info)
  }

  const handleAddNew = () => {
    setEditMode(false)
    setShowForm(true)
    reset({
      street: '',
      city: '',
      state: '',
      country: '',
      phone: ''
    })
  }

  const initiateDelete = (id) => {
    setIdToDelete(id)
  }

  const confirmDelete = async () => {
    if (idToDelete) {
      setDeletingId(idToDelete)
      await deleteAddress(idToDelete)
      setDeletingId(null)
      setIdToDelete(null)
    }
  }

  const onSubmit = async (data) => {
    if (editMode) {
      await updateAddress(data, reset, () => {
        setEditMode(false)
        setShowForm(false)
      })
    } else {
      await addAddress(data, () => {
        reset()
        setShowForm(false)
      })
    }
  }

  const isLimitReached = address?.length >= 3

  return (
    <div className=''>
      <div className='mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-50 pb-6'>
        <div>
          <h2 className='text-2xl font-bold text-gray-900'>Shipping Addresses</h2>
          <p className='text-gray-500 mt-1 text-sm'>Manage where your orders are delivered</p>
        </div>

        {!showForm && (
          <button 
            onClick={handleAddNew}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
              isLimitReached 
                ? 'bg-gray-100 text-gray-400 hover:bg-gray-200 shadow-none' 
                : 'bg-primary text-white shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5'
            }`}
          >
            <MdAdd size={22} />
            <span>Add New Address</span>
          </button>
        )}
      </div>

      {isLimitReached && !showForm && (
        <div className='mb-8 p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-3 text-blue-700 text-sm'>
          <MdInfoOutline size={20} />
          <p>You can save up to 3 delivery addresses. Delete an existing one to add a new one.</p>
        </div>
      )}

      {showForm ? (
        <div className='max-w-3xl bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 mb-12 animate-in fade-in slide-in-from-top-4 duration-300'>
          <div className='flex justify-between items-center mb-8'>
            <h3 className='text-xl font-extrabold text-gray-900 flex items-center gap-2'>
              {editMode ? <MdEdit className='text-primary' /> : <MdAdd className='text-primary' />}
              {editMode ? 'Edit Address' : 'New Delivery Address'}
            </h3>
            <button
              onClick={() => {
                setShowForm(false)
                setEditMode(false)
              }}
              className='p-2 hover:bg-gray-200 rounded-full text-gray-400 transition-colors'
            >
              <MdClose size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='md:col-span-2 space-y-2'>
                <label className='text-sm font-bold text-gray-700'>Street Address</label>
                <input
                  type="text"
                  className='w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-700 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all'
                  placeholder='e.g. 123 Business Way'
                  {...register("street", { required: "Street is required" })}
                />
                {errors.street && <p className='text-red-500 text-xs font-semibold'>{errors.street.message}</p>}
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-bold text-gray-700'>City</label>
                <input
                  type="text"
                  className='w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-700 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all'
                  placeholder='City'
                  {...register("city", { required: "City is required" })}
                />
                {errors.city && <p className='text-red-500 text-xs font-semibold'>{errors.city.message}</p>}
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-bold text-gray-700'>State</label>
                <input
                  type="text"
                  className='w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-700 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all'
                  placeholder='State'
                  {...register("state", { required: "State is required" })}
                />
                {errors.state && <p className='text-red-500 text-xs font-semibold'>{errors.state.message}</p>}
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-bold text-gray-700'>Country</label>
                <input
                  type="text"
                  className='w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-700 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all'
                  placeholder='Country'
                  {...register("country", { required: "Country is required" })}
                />
                {errors.country && <p className='text-red-500 text-xs font-semibold'>{errors.country.message}</p>}
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-bold text-gray-700'>Phone Number</label>
                <input
                  type="text"
                  className='w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-700 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all'
                  placeholder='Contact for delivery'
                  {...register("phone", {
                    required: "Phone is required",
                    minLength: { value: 10, message: "Minimum 10 characters" }
                  })}
                />
                {errors.phone && <p className='text-red-500 text-xs font-semibold'>{errors.phone.message}</p>}
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                type="submit"
                disabled={loading}
                className='flex-1 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50'
              >
                {loading ? <ImSpinner3 className="animate-spin" size={20} /> : (editMode ? 'Save Changes' : 'Add Address')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setEditMode(false)
                }}
                className='flex-1 px-8 py-4 rounded-xl border border-gray-200 text-gray-500 font-bold hover:bg-gray-50 transition-all'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {address?.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {Array.isArray(address) && address.map((info, index) => (
            <div key={info._id} className='bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden'>
              <AddressCard info={info} index={index} />
              <div className='flex border-t border-gray-50 overflow-hidden'>
                <button
                  onClick={() => handleEdit(info)}
                  className='flex-1 flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-wider text-blue-600 hover:bg-blue-50 transition-colors border-r border-gray-50'
                >
                  <MdEdit size={16} /> Edit
                </button>
                <button
                  onClick={() => initiateDelete(info._id)}
                  disabled={deletingId === info._id}
                  className='flex-1 flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-wider text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50'
                >
                  {deletingId === info._id ? <ImSpinner3 className="animate-spin" size={16} /> : <><MdDeleteOutline size={18} /> Delete</>}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : !showForm && (
        <div className='text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200'>
          <p className='text-gray-400 font-bold mb-6'>No delivery addresses found yet.</p>
          <button
            onClick={handleAddNew}
            className='bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-1'
          >
            Add Your First Address
          </button>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {idToDelete && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm'>
          <div className='bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative animate-in fade-in zoom-in duration-300'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-5'>
                <MdWarningAmber size={34} />
              </div>
              <h4 className='text-xl font-black text-gray-900 mb-2'>Delete Address?</h4>
              <p className='text-gray-500 mb-8 text-sm leading-relaxed'>
                Are you sure you want to remove this address? This action cannot be undone.
              </p>
              <div className='grid grid-cols-2 gap-4'>
                <button 
                  onClick={() => setIdToDelete(null)} 
                  className='px-6 py-3.5 rounded-xl border border-gray-100 text-gray-500 font-bold hover:bg-gray-50 transition-all text-sm'
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmDelete} 
                  className='px-6 py-3.5 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-200 text-sm flex items-center justify-center'
                  disabled={loading}
                >
                  {loading ? <ImSpinner3 className="animate-spin" size={20} /> : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Address
