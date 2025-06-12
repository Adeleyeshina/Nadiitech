import { create } from "zustand";
import axios from '../lib/axios'
import {toast} from 'react-hot-toast'

export const contactStore = create((set)=>({
    loading : false,
    successMessage : false,

    sendMessage : async (contact, reset) => {
        set({loading : true})
        
        try {
            const res = await axios.post("/contactlist", contact)
            set({loading : false})
            toast.success(res.data.message)
            set({successMessage : true})
            reset()
        } catch (error) {
            set({loading : false})
            toast.error(error.response.message || "An error occured")
            set({successMessage : false})
        }
    },

    sendBooking : async (data, reset) => {
        set({loading : true})

        try {
            const res = await axios.post("/booking", data)
            set({loading : false})
            toast.success(res.data.message)
            reset()
        } catch (error) {
            set({loading : false})
            toast.error(error.response.message || "An error occured")
        }
    }
}))