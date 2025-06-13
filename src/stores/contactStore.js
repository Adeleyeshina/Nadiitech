import { create } from "zustand";
import axios from '../lib/axios'
import {toast} from 'react-hot-toast'

export const contactStore = create((set, get)=>({
    loading : false,
    successMessage : false,
    bookings : [],
    Book : null,

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
            set((prevBooking) => ({
                bookings : [...prevBooking.bookings, res.data]
            }))
            toast.success(res.data.message || "Message Sent")
            reset()
        } catch (error) {
            set({loading : false})
            toast.error(error.response.message || "An error occured")
        }
    },
  
    allBookings : async () => {
        try {
            set({loading : true})
            const res =await axios.get("/booking")
            set({bookings : res.data.bookings})
            set({loading : false})
        } catch (error) {
            set({loading : false})
            toast.error(error.response?.data?.message || "An error occured")
        }
    },

    singleBooking : async (id) => {
        try {
            set({loading : true})
            const res =await axios.get(`/booking/${id}`)  
            set({Book : res.data})
            set({loading : false})
        } catch (error) {
            set({loading : false})
            toast.error(error.response?.data?.message || "An error occured")
        }
    }
}))