import React from 'react'
import { useCartStore } from '../stores/useCartStore'
import EmptyCart from '../component/CartComponent/EmptyCart'
import CartItem from '../component/CartComponent/CartItem'
import {Link} from 'react-router-dom'

const Cart = () => {
  const {cart, total} = useCartStore()
  return (
    <div>
      {cart.length === 0?
      <EmptyCart /> : (
        <section className='space-y-6 min-h-[80vh] bg-ash'>
          <div>
            <h2 className='font-semibold text-3xl'>Your Cart</h2>
            <p className='mt-3 text-lg font-normal'>Review your selected items before continuing</p>
          </div>

          <div className='flex flex-col lg:flex-row gap-7 items-start'>
            {/* Cart items */}
            <div className='lg:flex-2/3 space-y-5 w-full'>
              {
                cart.map((item) => {
                  return <CartItem key={item._id} item={item}/>
                })
              }
            </div>

              {/* Cart summary */}
            <div className='bg-white lg:flex-1/3 p-5 w-full rounded-lg shadow-sm'>
              <h2 className='text-2xl font-semibold'>Cart Summary </h2>
              <div className="flex justify-between text-lg mt-3 font-normal">
                <p>Total Items:</p>
                <p>{cart.length} products</p>
              </div>
              <hr className='my-3 border-primary'/>
              <div className="flex justify-between text-lg mt-3 font-normal">
                <p>Total </p>
                <p>₦{total.toLocaleString()}</p>
              </div>
              <div>
                <Link to={"/checkout"} className='block text-center py-3.5 px-7 w-full mt-3 font-semibold text-lg rounded-lg text-white bg-primary'>
                  Proceed to Checkout
                </Link>
                <p className='mt-3 text-center'>or <Link to={"/products"} className='underline'>Continue Shopping</Link></p>
              </div>
            </div>
          </div>
        </section>
      )
    }

    </div>
  )
}

export default Cart