import React, { useEffect } from 'react'
import { useProductStore } from '../../stores/useProductStore'
import { MdBlock, MdEdit, MdStar, MdOutlineInventory2 } from 'react-icons/md'
import { FaCheckCircle, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner, { LoadingDataSpinner } from '../LoadingSpinner'

const AdminProducts = () => {
    const { deleteProduct, toggleFeaturedProduct, fetchAllProducts, toggleSoldOut, products, loading } = useProductStore()
    const navigate = useNavigate()

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (loading && products.length === 0) return <LoadingDataSpinner />

    return (
        <div className=''>
            <div className='mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-50 pb-8'>
                <div>
                    <h2 className='text-2xl font-black text-gray-900'>Product Inventory</h2>
                    <p className='text-gray-500 text-sm mt-1'>Manage your catalog, stock status, and featured items</p>
                </div>
                <div className='bg-primary/5 px-4 py-2 rounded-lg border border-primary/10'>
                    <p className='text-primary font-bold text-sm flex items-center gap-2'>
                        <MdOutlineInventory2 /> Total: {products.length} Products
                    </p>
                </div>
            </div>

            <div className='overflow-x-auto border border-gray-100 rounded-2xl shadow-sm'>
                <table className='w-full text-left border-collapse min-w-[800px]'>
                    <thead>
                        <tr className='bg-gray-50/50 border-b border-gray-100'>
                            <th className='px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest w-12'></th>
                            <th className='px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest'>Product Detail</th>
                            <th className='px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest'>Price</th>
                            <th className='px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest text-center'>Featured</th>
                            <th className='px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest text-center'>Status</th>
                            <th className='px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest text-right'>Actions</th>
                        </tr>
                    </thead>

                    <tbody className='divide-y divide-gray-50'>
                        {products.map((product, index) => (
                            <tr key={product._id} className='hover:bg-gray-50/30 transition-colors'>
                                <td className='px-6 py-5 whitespace-nowrap text-gray-400 font-bold text-xs'>
                                    {index + 1}
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-12 w-12 rounded-xl border border-gray-100 overflow-hidden bg-gray-50 p-1 shrink-0">
                                            <img
                                                src={product?.featuredImage}
                                                alt={product.name}
                                                className='h-full w-full object-cover rounded-lg'
                                            />
                                        </div>
                                        <div className="ml-4 overflow-hidden">
                                            <div className="text-sm font-bold text-gray-900 truncate max-w-[200px]">{product.name}</div>
                                            {/* <div className="text-xs text-gray-400 font-medium">ID: #{product._id.slice(-6).toUpperCase()}</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <div className="text-sm font-black text-gray-900">₦{product.price.toLocaleString()}</div>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap text-center">
                                    <button
                                        onClick={() => toggleFeaturedProduct(product._id)}
                                        className={`p-2 rounded-xl transition-all duration-300 ${product.isFeatured
                                            ? 'bg-yellow-50 text-yellow-500 shadow-sm'
                                            : 'bg-gray-50 text-gray-300 hover:text-yellow-500'
                                            }`}
                                        title={product.isFeatured ? "Unfeature Product" : "Feature Product"}
                                    >
                                        <MdStar size={22} />
                                    </button>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap text-center">
                                    <button
                                        onClick={() => toggleSoldOut(product._id)}
                                        className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${product.soldOut
                                            ? 'bg-red-50 text-red-600 border border-red-100'
                                            : 'bg-green-50 text-green-600 border border-green-100'
                                            }`}
                                    >
                                        {product.soldOut ? 'Out of Stock' : 'In Stock'}
                                    </button>
                                </td>
                                <td className="px-6 py-5 whitespace-nowrap text-right">
                                    <div className='flex items-center justify-end gap-2'>
                                        <button
                                            onClick={() => navigate(`/admin-samuel/updateproduct/${product._id}`)}
                                            className='p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors'
                                            title="Edit Product"
                                        >
                                            <MdEdit size={22} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (window.confirm('Are you sure you want to delete this product?')) {
                                                    deleteProduct(product._id)
                                                }
                                            }}
                                            className='p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors'
                                            title="Delete Product"
                                        >
                                            <FaTrash size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {products.length === 0 && (
                <div className='text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100 mt-6'>
                    <p className='text-gray-400 font-bold'>No products found in inventory.</p>
                </div>
            )}
        </div>
    )
}

export default AdminProducts
