import { create } from "zustand";
import axios from '../lib/axios'
import {toast} from 'react-hot-toast'

export const useCartStore = create((set, get) => ({
    cart : [],
    total : 0,
    getCartItem : async () => {
     try {
        const res = await axios.get("/cart")
        set({cart : res.data})
        get().calculateTotal()
     } catch (error) {
        set({cart : []})
        toast.error(error.response?.data?.message || 'An error occured')
     }
    },
    addToCart: async (product) => {
        try {
            await axios.post("/cart", {productId : product._id})
            toast.success("Product added to cart")
            set((prevState) => {
                const existingItem = prevState.cart.find((item) => item._id === product._id)
                const newCart = existingItem 
                ? prevState.cart.map((item) => item._id === product._id ? 
            {...item, quality: item.quality + 1} :item) :
            [...prevState.cart, {...product,  quaality : 1}]
            return {cart : newCart}
            })
            get().calculateTotal()
        } catch (error) {
            toast.error(error.response.data?.message || 'An error occured') 
        }
    },
    removeFromCart : async (productId) => {
        try {
            await axios.delete(`/cart`, {data : {productId}})
            set((prevState) =>({
                cart : prevState.cart.filter((item) => item._id !== productId)
            }))
            get().calculateTotal();
        } catch (error) {
            toast.error(error.response.data?.message || "An error occured")
            console.log(error.response.data);
            
        }
    },
    calculateTotal : () => {
        const {cart} = get()
        const total = cart.reduce((sum, item) =>  sum + item.price * item.quantity, 0)
        set({total})
    }
}))