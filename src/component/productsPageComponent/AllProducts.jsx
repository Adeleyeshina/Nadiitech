import React from 'react'
import ProductCard from '../ProductCard'
import { useProductStore } from '../../stores/useProductStore'
const AllProducts = () => {
    const {products} = useProductStore()

  return (
    <section className='bg-ash'>
        <h2 className='text-2xl md:text-3xl font-bold ml-5'>All Products</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10'>
            {
                products?.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })
            }
        </div>
    </section>
  )
}

export default AllProducts