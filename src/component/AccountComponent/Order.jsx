import React, { useEffect, useState } from 'react'
import axios from '../../lib/axios'
import { Link } from 'react-router-dom'
import OrderTable from '../UI/OrderTable'

const Order = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    axios
      .get("/orders/user")
      .then(res => {
        setOrders(res.data || []);
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        console.log(error)
      })
  },[])

  if(loading) return <p>Loading...</p>
  return (
    <div className='overflow-hidden'>
      <h2 className='text-2xl md:text-3xl font-bold text-center'>Order History</h2>
      
      {
        orders?.length > 0 ? (
          <OrderTable orders={orders} isAdmin={false}/>
        ) : (
          <div className='mt-10 text-center'>
            <p className='text-lg font-semibold'>You havent place any other</p>
            <Link to={"/products"} 
            className='py-2 px-3.5 bg-primary text-white font-semibold rounded-sm shadow-sm inline-block mt-10'>
            Start Shopping</Link>
          </div>
        )
      }
    </div>
  )
}

export default Order