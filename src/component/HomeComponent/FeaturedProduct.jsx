import React from 'react'
import Heading from '../Heading'
import ProductCard from '../ProductCard'
import { useProductStore } from '../../stores/useProductStore'
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const FeaturedProduct = () => {
  const {featuredProduct, loading} = useProductStore()
  return (
    <section className='bg-ash'>
        <Heading title={"Featured Products"}
        body={"Quality electrical products designed to meet your needs. All products come with warranty and professional installation options."}/>
        
        {
          loading ? <p className='text-center mt-5'>Product Loading...</p> :
          (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10'>
            {
                featuredProduct?.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })
            }
          </div>
          )
        }
        <Link to={"/products"} className={"text-center text-primary block mt-4 text-lg hover:underline group"}>
        view all products
        <FaArrowRight className='inline-block ml-2 group-hover:translate-x-1 duration-150'/>
        </Link>
    </section>
  )
}

export default FeaturedProduct