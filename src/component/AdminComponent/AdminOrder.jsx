import React, { useEffect, useState } from 'react';
import axios from '../../lib/axios';
import OrderTable from '../UI/OrderTable';
import LoadingSpinner, { LoadingDataSpinner } from '../LoadingSpinner';
import { MdOutlineReceiptLong } from 'react-icons/md';

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/orders/admin')
      .then((res) => {
        setOrders(res.data.orders || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingDataSpinner />;

  return (
    <div className=''>
      <div className='mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-50 pb-8'>
        <div>
          <h2 className='text-2xl font-black text-gray-900'>Global Orders</h2>
          <p className='text-gray-500 text-sm mt-1'>Monitor and manage all customer transactions</p>
        </div>
        <div className='bg-primary/5 px-4 py-2 rounded-lg border border-primary/10'>
          <p className='text-primary font-bold text-sm flex items-center gap-2'>
            <MdOutlineReceiptLong /> Total: {orders.length} Orders
          </p>
        </div>
      </div>

      {orders.length > 0 ? (
        <div className='overflow-x-auto'>
          <OrderTable orders={orders} isAdmin={true} />
        </div>
      ) : (
        <div className='text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100'>
          <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm'>
            <MdOutlineReceiptLong size={40} className='text-gray-300' />
          </div>
          <p className='text-gray-400 font-bold'>No orders have been placed yet.</p>
        </div>
      )}
    </div>
  );
};

export default AdminOrder;
