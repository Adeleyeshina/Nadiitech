import React from 'react'
import {toast} from 'react-hot-toast'
import { PiShoppingCartLight } from 'react-icons/pi'
import { useUserStore } from '../stores/useUserStore'
import {Link, useNavigate} from 'react-router-dom'
import { useCartStore } from '../stores/useCartStore'

const ProductCard = ({product}) => {
    const{addToCart} = useCartStore()
    const navigate = useNavigate()
    const {user} = useUserStore()
    const handleAddToCart = () => {
        if(!user) {
            navigate("/login")
            return
        }
        else {
            addToCart(product)
        }
        
    }
    const truncatedDescription = (description) => {
        const index = description.indexOf('.')
        if(index !==-1) {
            return description.substring(0, index + 1)
        }else {
            return description
        }
    }
  return (
    <div className='bg-white rounded-lg shadow-lg flex flex-col justify-between'>
        <Link to={`/products/details/${product._id}`} className=''>
            <div>
                <img src={product.image} alt={product.name} className='h-[200px] overflow-hidden object-cover w-full rounded-t-lg '/>
                <div className='px-5'>
                    <h3 className='font-bold text-[1.2rem]'>{product.name}</h3>
                    <p className='text-sm hover:underline transition duration-700'>{truncatedDescription(product.description)}</p>
                </div>
            </div>
        </Link>
        <div className='px-5 pb-7'>
            <p className='font-semibold mb-3 text-2xl'>
                ₦
                {product.price.toLocaleString()}
            </p>
            <button className="flex item-center justify-center w-full rounded-lg bg-primary px-5 py-2.5 text-center text-sm
            font-medium text-white hover:cursor-pointer focus:outline-none focus:ring-4
            focus:ring-secondary" onClick={handleAddToCart}>
                <PiShoppingCartLight size={22} className='mr-2'/>
                Add to cart
            </button >
        </div>
    </div>
  )
}

export default ProductCard