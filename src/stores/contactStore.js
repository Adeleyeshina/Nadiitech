import { create } from "zustand";
import axios from '../lib/axios'
import {toast} from 'react-hot-toast'

export const contactStore = create((set)=>({
    loading : false,

    sendMessage : async (contact) => {
        set({loading : true})
        
        try {
            const res = await axios.post("/contactlist", contact)
            set({loading : false})
            toast.success(res.data.message)
        } catch (error) {
            set({loading : false})
            toast.error(error.response.message || "An error occured")
        }
    },

}))