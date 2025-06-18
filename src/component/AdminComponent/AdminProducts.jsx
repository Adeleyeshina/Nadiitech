import React, { useEffect } from 'react'
import { useProductStore } from '../../stores/useProductStore'
import { MdStar } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'

const AdminProducts = () => {
    const {deleteProduct, toggleFeaturedProduct,fetchAllProducts, products} = useProductStore()
    useEffect(() => {
        fetchAllProducts()
    },[fetchAllProducts])
  return (
    <div>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-4 text-primary'>All Products</h2>

        <table className='min-w-full'>

            <thead className='mt-5 bg-primary text-white'>
                <tr className=''>
                    <th className=''>Product</th>
                    <th className='hidden lg:table-cell'>Price</th>
                    <th>Featured</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    products.map((product) => {
                        return (
                            <tr key={product._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img 
                                            src={product.image} 
                                            alt={product.name} 
                                            className='h-10 w-10 rounded-full object-cover'
                                            />
                                        </div>
                                        <div className="ml-4 hidden lg:block">
                                            <div className="text-sm font-medium">{product.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                                    <div className="text-sm">{product.price.toLocaleString()}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                     <button
                                        onClick={() => toggleFeaturedProduct(product._id)}
                                        className={`p-1  rounded-full ${product.isFeatured ? 'bg-primary text-white' : 'bg-white text-black'}
                                         hover:bg-yellow-500 transition-colors duration-200`}
                                     >
                                        <MdStar size={30} className='hover:cursor-pointer'/>
                                     </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-medium">
                                     <button
                                        onClick={() => deleteProduct(product._id)}
                                        className='text-red-500'
                                     >
                                        <FaTrash size={30} className='hover:cursor-pointer'/>
                                     </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default AdminProducts