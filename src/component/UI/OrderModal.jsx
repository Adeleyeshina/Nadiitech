import React from 'react';
import { IoMdClose } from 'react-icons/io';

const OrderModal = ({ order, onClose, isAdmin }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
          aria-label="Close"
        >
          <IoMdClose />
        </button>

        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Order Summary</h2>

        {/* BASIC INFO */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="font-semibold">Order ID:</span>
            <span className="text-right break-all">#ORD-{order._id.slice(-6).toUpperCase()}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Total:</span>
            <span className="text-right">₦{order.totalAmount}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Status:</span>
            <span className={`${order.status === 'success' ? 'text-green-600' : 'text-yellow-600'}`}>
              {order.status}
            </span>
          </div>
          {isAdmin && order.user && (
            <>
              <div className="flex justify-between">
                <span className="font-semibold">Name:</span>
                <span className="text-right break-all">{order.user.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Email:</span>
                <span className="text-right break-all">{order.user.email}</span>
              </div>
            </>
          )}
        </div>

        <hr className="my-4" />

        {/* ADDRESS */}
        {order.address && (
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Shipping Info</h3>
            <div className="text-sm text-gray-700 space-y-1">
              <p>{order.address.street}</p>
              <p>{order.address.city}, {order.address.state}</p>
              <p>{order.address.phone}</p>
            </div>
          </div>
        )}

        <hr className="my-4" />

        {/* PRODUCTS */}
        {order.products?.length > 0 && (
          <div>
            <h3 className="text-lg font-bold mb-2">Order Details</h3>
            <div className="space-y-3">
              {order.products.map((item, idx) => (
                <div key={item._id || idx} className="flex items-center gap-3">
                  <img
                    src={item.product?.featuredImage}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded border"
                  />
                  <div className="flex-1 text-sm">
                    <p className="font-semibold">{item.product.name}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>₦{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;
