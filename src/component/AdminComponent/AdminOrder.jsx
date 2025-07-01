import React, { useEffect, useState } from 'react';
import axios from '../../lib/axios';
import OrderTable from '../UI/OrderTable';

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

  if (loading) return <p className="text-center py-10 font-semibold">Loading...</p>;

  return (
    <div className="px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center">All Orders (Admin)</h2>

      {orders.length > 0 ? (
        <OrderTable orders={orders} isAdmin={true} />
      ) : (
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold">No orders have been placed yet.</p>
        </div>
      )}
    </div>
  );
};

export default AdminOrder;
