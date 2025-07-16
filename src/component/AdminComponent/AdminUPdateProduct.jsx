import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ImSpinner3 } from 'react-icons/im'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { useProductStore } from '../../stores/useProductStore'

const AdminUpdateProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    getProductDetails,
    productDetails,
    updateProduct,
    loading,
  } = useProductStore()

  const [updatedProduct, setUpdatedProduct] = useState({
    name: '',
    description: '',
    price: '',
    featuredImage: '',
    images: []
  })

  useEffect(() => {
    getProductDetails(id, navigate)
  }, [id, getProductDetails, navigate])

  useEffect(() => {
    if (productDetails) {
      setUpdatedProduct({
        name: productDetails.name || '',
        description: productDetails.description || '',
        price: productDetails.price || '',
        featuredImage: productDetails.featuredImage || '',
        images: productDetails.images || [],
      })
    }
  }, [productDetails])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateProduct(id, updatedProduct)
  }

  const handleFeaturedImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () =>
        setUpdatedProduct((prev) => ({ ...prev, featuredImage: reader.result }))
      reader.readAsDataURL(file)
    }
  }

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files)
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(file)
      })
    })
    Promise.all(promises).then((images) => {
      setUpdatedProduct((prev) => ({ ...prev, images }))
    })
  }

  return (
    <div className='lg:px-10 overflow-hidden px-7'>
      <h2 className='text-2xl md:text-3xl font-bold text-center mb-4 text-primary'>
        Update Product
      </h2>
      <form onSubmit={handleSubmit} className='overflow-hidden space-y-4'>
        <div className='mt-4'>
          <label className='text-sm font-semibold block mb-3'>Product Name</label>
          <input
            type='text'
            className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
            placeholder='Enter product name'
            value={updatedProduct.name}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
            required
          />
        </div>

        <div className='mt-4'>
          <label className='text-sm font-semibold block mb-3'>Description</label>
          <textarea
            rows='3'
            className='w-full rounded-lg border border-gray-400 p-2 outline-primary resize-none'
            placeholder='Enter the product description'
            value={updatedProduct.description}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, description: e.target.value })
            }
          />
        </div>

        <div className='mt-4'>
          <label className='text-sm font-semibold block mb-3'>Price</label>
          <input
            type='text'
            className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
            placeholder='Enter the product price'
            value={updatedProduct.price}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
            required
          />
        </div>

        {/* Featured image */}
        <div className='mt-4'>
          <input
            type='file'
            id='featuredImage'
            accept='image/*'
            className='sr-only'
            onChange={handleFeaturedImageChange}
          />
          <label htmlFor='featuredImage' className='text-sm font-semibold block mb-3'>
            <IoCloudUploadOutline size={35} className='inline-block mr-3' />
            Upload New Featured Image
          </label>
          {updatedProduct.featuredImage && (
            <img
              src={updatedProduct.featuredImage}
              alt='Featured'
              className='w-28 h-28 object-cover rounded-md border'
            />
          )}
        </div>

        {/* Other images */}
        <div className='mt-4'>
          <input
            type='file'
            id='images'
            accept='image/*'
            multiple
            className='sr-only'
            onChange={handleImagesChange}
          />
          <label htmlFor='images' className='text-sm font-semibold block mb-3'>
            <IoCloudUploadOutline size={35} className='inline-block mr-3' />
            Upload New Additional Images
          </label>

          {updatedProduct.images?.length > 0 && (
            <div className='grid grid-cols-3 gap-3 mt-2'>
              {updatedProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Preview ${index}`}
                  className='w-24 h-24 object-cover rounded-md border'
                />
              ))}
            </div>
          )}
        </div>

        <button
          className='bg-primary mt-5 text-center px-9 block py-2 pb-3 text-lg font-semibold rounded-xl
          text-white cursor-pointer hover:opacity-[.9] disabled:opacity-[.5] w-fit mx-auto'
          disabled={loading}
        >
          {loading ? (
            <span className='flex gap-4 place-items-center'>
              <ImSpinner3 size={25} className='animate-spin' />
              Updating...
            </span>
          ) : (
            'Update Product'
          )}
        </button>
      </form>
    </div>
  )
}

export default AdminUpdateProduct
