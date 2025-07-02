import React, { useState } from 'react';
import OrderModal from './OrderModal';

const OrderTable = ({ orders, isAdmin }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleView = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  return (
    <article className="w-full">
      <table className="w-full mt-5 text-sm mx-auto">
        <thead className="bg-primary text-white">
          <tr className=''>
            <th className="text-left  py-2">Order ID</th>
            <th className="hidden lg:table-cell text-left  py-2">Order Date</th>
            <th className="text-left  py-2">Status</th>
            <th className="hidden lg:table-cell text-left  py-2">Price</th>
            <th className="text-left  py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="border-b last:border-none">
              <td className=" py-2 font-medium break-all">
                #ORD-{order._id.slice(-4).toUpperCase()}
              </td>
              <td className="hidden lg:table-cell  py-2">
                {new Date(order.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </td>
              <td className=" py-2">
                <span
                  className={`inline-block px-1.5 lg:px-2 py-1 rounded text-xs font-semibold
                    ${
                      order.status === 'success'
                        ? 'bg-green-100 text-green-700'
                        : order.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : order.status === 'failed'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="hidden lg:table-cell  py-2 font-semibold whitespace-nowrap">
                {order.totalAmount.toLocaleString()}
              </td>
              <td className=" py-2 cursor-pointer">
                <button
                  onClick={() => handleView(order)}
                  className="bg-primary hover:opacity-90 text-white text-xs font-medium px-3 py-1.5 rounded transition"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <OrderModal
          order={selectedOrder}
          onClose={() => setModalOpen(false)}
          isAdmin={isAdmin}
        />
      )}
    </article>
  );
};

export default OrderTable;
