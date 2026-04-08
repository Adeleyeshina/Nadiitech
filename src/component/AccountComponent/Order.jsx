import React, { useEffect, useState } from 'react'
import axios from '../../lib/axios'
import { Link } from 'react-router-dom'
import OrderTable from '../UI/OrderTable'
import LoadingSpinner, { LoadingDataSpinner } from '../LoadingSpinner'
import { MdOutlineShoppingBag } from 'react-icons/md'

const Order = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("/orders/user")
      .then(res => {
        setOrders(res.data || []);
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        console.error(error)
      })
  }, [])

  if (loading) return <LoadingDataSpinner />

  return (
    <div className=''>
      <div className='mb-10 border-b border-gray-50 pb-8'>
        <h2 className='text-2xl font-bold text-gray-900'>Order History</h2>
        <p className='text-gray-500 mt-1 text-sm'>Track and manage your recent purchases</p>
      </div>

      {orders?.length > 0 ? (
        <div className='overflow-x-auto'>
          <OrderTable orders={orders} isAdmin={false} />
        </div>
      ) : (
        <div className='text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100'>
          <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm'>
            <MdOutlineShoppingBag size={40} className='text-gray-300' />
          </div>
          <h3 className='text-lg font-bold text-gray-900 mb-2'>No orders yet</h3>
          <p className='text-gray-500 mb-10 max-w-xs mx-auto text-sm'>Looks like you haven't placed any orders. Start exploring our amazing products!</p>
          <Link to={"/products"}
            className='bg-primary text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all inline-block'
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  )
}

export default Order
