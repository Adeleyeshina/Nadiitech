import React, { useState } from 'react'
import { ImSpinner3 } from 'react-icons/im'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { useProductStore } from '../../stores/useProductStore'

const CreateProducts = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    featuredImage: '',
    images: [],
  })

  const { createProduct, loading } = useProductStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createProduct(newProduct)
      setNewProduct({
        name: '',
        description: '',
        price: '',
        featuredImage: '',
        images: [],
      })
    } catch (error) {
      console.log('Error creating a product:', error)
    }
  }

  const handleFeaturedImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () =>
        setNewProduct((prev) => ({ ...prev, featuredImage: reader.result }))
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
      setNewProduct((prev) => ({ ...prev, images }))
    })
  }

  return (
    <div className='lg:px-10 overflow-hidden'>
      <h2 className='text-2xl md:text-3xl font-bold text-center mb-4 text-primary'>
        Create New Products
      </h2>
      <form onSubmit={handleSubmit} className='overflow-hidden space-y-4'>
        {/* Product Name */}
        <div className='mt-4'>
          <label className='text-sm font-semibold block mb-3'>Product Name</label>
          <input
            type='text'
            className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
            placeholder='Enter product name'
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            required
          />
        </div>

        {/* Description */}
        <div className='mt-4'>
          <label className='text-sm font-semibold block mb-3'>Description</label>
          <textarea
            rows='3'
            className='w-full rounded-lg border border-gray-400 p-2 outline-primary resize-none'
            placeholder='Enter the product description'
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
        </div>

        {/* Price */}
        <div className='mt-4'>
          <label className='text-sm font-semibold block mb-3'>Price</label>
          <input
            type='text'
            className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
            placeholder='Enter the product price'
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            required
          />
        </div>

        {/* Featured Image Upload */}
        <div className='mt-4'>
          <input
            required
            type='file'
            id='featuredImage'
            accept='image/*'
            className='sr-only'
            onChange={handleFeaturedImageChange}
          />
          <label htmlFor='featuredImage' className='text-sm font-semibold block mb-3'>
            <IoCloudUploadOutline size={25} className='inline-block mr-2' />
            Upload Featured Image
          </label>
          {newProduct.featuredImage && (
            <div className='flex flex-wrap gap-3 mt-2'>
              <img
                src={newProduct.featuredImage}
                alt='Featured Preview'
                className='w-20 h-20 object-cover rounded-md border'
              />
            </div>
          )}
        </div>

        {/* Additional Images Upload */}
        <div className='mt-4'>
          <input
            multiple
            required
            type='file'
            id='images'
            accept='image/*'
            className='sr-only'
            onChange={handleImagesChange}
          />
          <label htmlFor='images' className='text-sm font-semibold block mb-3'>
            <IoCloudUploadOutline size={25} className='inline-block mr-2' />
            Upload Other Images
          </label>

          {newProduct.images?.length > 0 && (
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mt-2'>
              {newProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Uploaded ${index}`}
                  className='w-20 h-20 object-cover rounded-md border'
                />
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          className='bg-primary mt-5 text-center px-9 block py-2 pb-3 text-lg font-semibold rounded-xl
          text-white cursor-pointer hover:opacity-[.9] disabled:opacity-[.5] w-fit mx-auto'
          disabled={loading}
        >
          {loading ? (
            <span className='flex gap-4 place-items-center'>
              <ImSpinner3 size={25} className='animate-spin' />
              Loading...
            </span>
          ) : (
            <span>Create Product</span>
          )}
        </button>
      </form>
    </div>
  )
}

export default CreateProducts
