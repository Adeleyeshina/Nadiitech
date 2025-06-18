import React, { useState } from 'react'
import { ImSpinner3 } from 'react-icons/im'
import {IoCloudUploadOutline } from 'react-icons/io5'
import { useProductStore } from '../../stores/useProductStore'

const CreateProducts = () => {
    const [newProduct, setNewProduct] = useState ({
        name : '',
        description : '',
        price : '',
        image : ''
    })
    
    const {createProduct, loading} = useProductStore()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createProduct(newProduct)
            setNewProduct({
                    name : '',
                    description : '',
                    price : '',
                    image : ''
            })
        } catch (error) {
            console.log("error creating a product");
            
        }
        
        
    }
    const handleImageChange = (e) => {
        const file = e.target.files [0]
        if(file) {
            const reader = new FileReader

            reader.onloadend = () => {
               setNewProduct({...newProduct, image : reader.result}) 
            }
            reader.readAsDataURL(file)
        }
    }
  return (
    <div className='lg:px-10 overflow-hidden'>
        <h2 className='text-2xl md:text-3xl  font-bold text-center mb-4 text-primary'>Create New Products</h2>
        <div>
            <form onSubmit={handleSubmit} className='overflow-hidden space-y-4'>
                <div className='mt-4'> 
                  <label htmlFor="product name" className='text-sm font-semibold block mb-3'>Product Name</label>
                  <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                  placeholder='Enter product name'
                  value={newProduct.name}
                  onChange={e => setNewProduct({...newProduct, name : e.target.value})}
                  required
                  />
                </div>
                <div className='text-area'>
                    <div className='mt-4'> 
                    <label htmlFor="description" className='text-sm font-semibold block mb-3'>Description</label>
                    <textarea name="" 
                    id="" cols="50" 
                    rows={"3"} 
                    placeholder='Enter the product description'
                    className='w-full rounded-lg border border-gray-400 p-2 outline-primary resize-none'
                    value={newProduct.description}
                    onChange={e=> setNewProduct({...newProduct, description : e.target.value})}
                    >         
                    </textarea>
                    </div>
                </div>
                <div className='mt-4'> 
                  <label htmlFor="Price" className='text-sm font-semibold block mb-3'>Price</label>
                  <input type="text" className='w-full rounded-lg border border-gray-400 p-2 outline-primary'
                  placeholder='Enter the product price'
                  value={newProduct.price}
                  onChange={e => setNewProduct({...newProduct, price : e.target.value})}
                  required
                  />
                </div>
                <div className='mt-4 items-center overflow-hidden'> 
                  <input required type="file" id="image" accept='image/*' className='sr-only rounded-lg overflow-hidden border border-gray-400 p-2 outline-primary'
                  onChange={handleImageChange}
                  />
                <label htmlFor="image" className='text-sm font-semibold block mb-3'>
                    <IoCloudUploadOutline size={35} className='inline-block mr-3'/>
                    Upload Image
                </label>
                  {newProduct.image && <span className=''>Image Uploaded</span>} 
                </div>
              
            <button className='bg-primary mt-5 text-center px-9 block py-2 pb-3 text-lg font-semibold rounded-xl
              text-white cursor-pointer hover:opacity-[.9] disabled:opacity-[.5] w-fit mx-auto' disabled={loading}>
                  {
                loading ? (
                <span className="flex gap-4 place-items-center">
                    <ImSpinner3 size={25} className="animate-spin"/>
                    Loading...
                </span>
                ) : <span  className=''>Create Product</span>
            }
            </button>
            </form>
        </div>
    </div>
  )
}

export default CreateProducts