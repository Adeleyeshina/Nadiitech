import {create} from 'zustand'
import axios from '../lib/axios'
import {toast} from 'react-hot-toast'


export const useUserStore = create((set, get) => ({
   
    user : null,
    loading : false,
    checkingAuth : true,

    signup : async ({name, email, password, confirmPassword, navigate}) => {

        set({loading : true});
        if (password !== confirmPassword) {
            set({loading : false});
            return toast.error("Password do not match");
            
        }

        try {
            const res = await axios.post("/auth/signup", {name, email, password});
            set({loading : false})
            toast.success(res.data.message)
            navigate("/check-email")
        } catch (error) {
            set({loading : false})
        toast.error(error.response.data.message || "An error occured") 
    }
    },

    login : async ({email, password}) => {
        set({loading : true})

        try {
            const res = await axios.post("/auth/login", {email, password})
            set({user : res.data, loading: false})
            toast.success('logged in')
        } catch (error) {
            set({loading : false})
            toast.error(error.response.data.message || "An error occured")
        }
    },

    checkAuth : async () => {
        set({checkingAuth : true})
        try {
            const res = await axios.get("/auth/profile")
            set({user : res.data, checkingAuth : false})
            
        } catch (error) {
            set({user : null, checkingAuth : false})
            
        }
    }
}))