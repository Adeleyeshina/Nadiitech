import React, { useEffect } from 'react'
import { useCartStore } from '../../stores/useCartStore'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

const CartItem = ({item}) => {
    const {removeFromCart, updateQuantity} = useCartStore()

    const truncatedDescription = (description) => {
        const index = description.indexOf('.')
        if(index !==-1) {
            return description.substring(0, index + 1)
        }else {
            return description
        }
    }
  return (
    <div className='rounded-lg p-4 shadow-sm border-primary bg-white'>

        <div className="flex flex-col md:flex-row p-3">
            <div className='w-full md:w-30 p-5 rounded-sm shadow-sm bg-ash text-center'>
                <img src={item.image} alt={item.image} className='rounded-lg w-30 mx-auto '/>
            </div>
            
            <div className='flex-1 md:pl-7 space-y-3'>
                {/* Product name */}
                <div className="flex justify-between">
                    <h2 className='font-semibold text-xl'>{item.name}</h2>
                    <button className='text-red-500 text-xl hover:cursor-pointer'
                    onClick={() => removeFromCart(item._id)}>
                        <FaTrash />
                    </button>
                </div>
                {/* Product description */}
                <div className='pr-7 md:pr-10'>
                    <p>{truncatedDescription(item.description)}</p>
                </div>

                {/* Quantity update */}
                <div className='flex justify-between'>
                    <div className="flex">
                        <button className='px-2.5 py-1.5 border border-primary rounded-s-lg'
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}>
                            <FaMinus />
                        </button>
                        <p className='px-3.5 py-1.5 border border-primary'>{item.quantity}</p>
                        <button className='px-2.5 py-1.5 border border-primary rounded-e-lg'
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                            <FaPlus />
                        </button>
                    </div>
                    <p className='font-semibold text-lg'>₦ {item.price.toLocaleString()}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem