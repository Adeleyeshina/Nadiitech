import { create } from "zustand";
import {toast} from 'react-hot-toast'
import axios from "../lib/axios";

export const useProductStore =  create((set) => ({
    products : [],
    loading : false,
    productDetails : null,
    recommendedProduct : [],
    featuredProduct : [],

    setProducts : (products) => set({products}),

    createProduct : async (productData) => {
         set({loading : true})
        try {
           
            const res = await axios.post("/products", productData)
            set((prev) => ({
                products : [...prev.products, res.data],
                loading : false
            }))
            toast.success("Product Uploaded")

        } catch (error) {
            toast.error(error.response.data.error || "An error occured")
            set({loading : false})
        }
    },
    fetchAllProducts : async () => {
        set({loading : true})
        try {
            const res = await axios.get("/products")
            set({products : res.data, loading : false})
        } catch (error) {
            set({error : 'Failed to fetch products', loading : false})
            toast.error(error.response.data?.error || 'Failed to fetch products', {id : "products"})
        }
    },
    getProductDetails : async (productId) => {
        set({loading : true})
        try {
            const res = await axios.get(`/products/single/${productId}`)
            set({productDetails : res.data, loading : false})
        } catch (error) {
            set({error : 'Failed to fetch products', loading : false})
            toast.error(error.response.data?.error || 'Failed to fetch products', {id : "products"})
        }
    },
    getRecommendedProduct : async () => {
        try {
           const res = await axios.get("/products/recommended")
            set({recommendedProduct : res.data})
        } catch (error) {
            set({error : 'Failed to fetch recomemded', loading : false})
            toast.error(error.response.data?.error || 'Failed to fetch recommended products', {id : "products"})
        }
    },
    deleteProduct : async (productId) => {
        set ({loading : true})
        try {
            await axios.delete(`/products/${productId}`)
            set((prevProduct) => ({
                products : prevProduct.products.filter((product) => product._id !== productId),
                loading : false
            }))
        
        } catch (error) {
            set({loading : false})
            toast(error.response.data?.message  || "Failed to delete product")
        }
    },
    toggleFeaturedProduct : async (productId) => {
        set({loading : true})
        try {        
            const res = await axios.patch(`/products/${productId}`)
            set((state) => ({
                products : state.products.map((product) => product._id ===productId ? {...product, isFeatured : res.data.isFeatured}
            : product),
            loading : false
            }))
        } catch (error) {
            set({loading : false})
            toast.error(error.response.data?.error || 'Failed to update product') 
        }
    },
    getFeaturedProduct : async () => {
        set({loading : true})
    try {
        const res = await axios.get("/products/featured")
        set({featuredProduct : res.data, loading : false})
    } catch (error) {
        set({error : 'Failed to fetch recomemded', loading : false})
        toast.error(error.response.data?.error || 'Failed to fetch featured products', {id : "products"})
    }
    },
}))