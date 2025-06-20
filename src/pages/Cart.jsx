import React from 'react'
import { useCartStore } from '../stores/useCartStore'
import EmptyCart from '../component/CartComponent/EmptyCart'
import CartItem from '../component/CartComponent/CartItem'

const Cart = () => {
  const {cart} = useCartStore()
  return (
    <div>
      {cart.length === 0?
      <EmptyCart /> : "your cart will show soon working on it"
    }

    </div>
  )
}

export default Cart