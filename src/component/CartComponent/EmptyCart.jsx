import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import Heading from '../Heading'
import {Link} from 'react-router-dom'

const EmptyCart = () => {
  return (
    <section className='h-full bg-secondary text-center relative'>
        <div className="h-[80vh] text-center text-primary flex flex-col justify-center">
            <MdOutlineShoppingCart size={50} className='self-center'/>
            <Heading title={"Your cart is empty"} body={"Looks like you haven't add anything to your cart yet"}/>
            <Link to={"/products"} 
            className='mt-5 px-10 py-3.5 rounded-lg shadow bg-primary text-white text-lg font-normal self-center w-fit'
            >
                Start Shopping
            </Link>
        </div>
    </section>
  )
}

export default EmptyCart