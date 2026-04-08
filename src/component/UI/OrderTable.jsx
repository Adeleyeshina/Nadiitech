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
      <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
        <table className="w-full text-sm text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest w-12"></th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Order ID</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Date</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Amount</th>
              <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((order, index) => (
              <tr key={order._id} className="hover:bg-gray-50/30 transition-colors text-gray-700">
                <td className="px-6 py-5 whitespace-nowrap text-gray-400 font-bold text-xs">
                  {index + 1}
                </td>
                <td className="px-6 py-5 font-bold whitespace-nowrap">
                  #ORD-{order._id.slice(-6).toUpperCase()}
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  {new Date(order.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest
                      ${order.status === 'success'
                        ? 'bg-green-50 text-green-600 border border-green-100'
                        : order.status === 'pending'
                          ? 'bg-yellow-50 text-yellow-600 border border-yellow-100'
                          : order.status === 'failed'
                            ? 'bg-red-50 text-red-600 border border-red-100'
                            : 'bg-gray-50 text-gray-600 border border-gray-100'
                      }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-5 font-black text-gray-900 text-right whitespace-nowrap">
                  ₦{order.totalAmount.toLocaleString()}
                </td>
                <td className="px-6 py-5 text-right whitespace-nowrap">
                  <button
                    onClick={() => handleView(order)}
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg font-bold text-xs transition-all"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
