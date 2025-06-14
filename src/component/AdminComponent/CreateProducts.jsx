import React, { useState } from 'react'
import { FaUpload } from 'react-icons/fa'

const CreateProducts = () => {
    const [newProduct, setNewProduct] = useState ({
        name : '',
        description : '',
        price : '',
        image : ''
    })
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(JSON.stringify(newProduct))
        
    }
  return (
    <div className='px-5 lg"px-10'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-4 text-primary'>Create New Products</h2>
        <div>
            <form onSubmit={handleSubmit}>
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
                {/* <div className='mt-4 flex items-center'> 
                  <label htmlFor="image" className='text-sm font-semibold block mb-3'>Product Image</label>
                  <input type="file" id="image" accept='image/*' className='w-full sr-only rounded-lg border border-gray-400 p-2 outline-primary'
                //   value={newProduct.price}
                //   onChange={e => setNewProduct({...newProduct, price : e.target.value})}
                  
                  />
                  <FaUpload htmlFor="image" />
                
                  {newProduct.image && <span className=''>{newProduct.image}</span>}
                </div> */}
              
                <button type='submit'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateProducts