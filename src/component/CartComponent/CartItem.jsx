import React from 'react'
import { useCartStore } from '../../stores/useCartStore'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

const CartItem = ({item}) => {
    const {removeFromCart, updateQuantity} = useCartStore()
  return (
    <section className='rounded-lg border p-4 shadow-sm border-primary'>
        {/* <div className=" flex space-y-4 md:items-center md:justify-between md:gap-6 md:space-y-0">
            <div className="shrink-0 md:order-1">
                <img src={item.image} alt={item.name}
                 className="h-20 md:32 rounded object-cover" />
            </div>
            <label htmlFor="" className="sr-only">Choose quantity:</label>

            <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className='flex items-center gap-2'>                
                    <button
                    className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
                     border-primary bg-secondary'
                     onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    >
                        <FaMinus />
                    </button>
                    <p>{item.quantity}</p>
                    <button
                    className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
                     border-primary bg-secondary'
                     onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    >
                        <FaPlus />
                    </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                    <p className="text-base font-bold text-primary">{item.price}</p>
                </div>
            </div>
            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <p className="text-base font-medium text-black">
                    {item.name}
                </p>
                <div className="flex items-center gap-4">
                    <button className="inline-flex items-center text-sm font-medium 
                    text-red-500 hover underline"
                    onClick={() => removeFromCart(item._id)}
                    >
                        <FaTrash />
                    </button>
                </div>

            </div>
        </div> */}
    </section>
  )
}

export default CartItem