import {create} from 'zustand'
import axios from '../lib/axios'
import {toast} from 'react-hot-toast'


export const useUserStore = create((set, get) => ({
   
    user : null,
    loading : false,
    checkingAuth : true,
    address : [],

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
    logout : async () => {
        try {
            const res = await axios.post("/auth/logout")
            set({user : null})
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occured")
        }
    },

    checkAuth : async () => {
        set({checkingAuth : true})
        try {
            const res = await axios.get("/auth/profile")
            set({user : res.data, checkingAuth : false})
            console.log(res.data);
        } catch (error) {
            set({user : null, checkingAuth : false})
            console.log(error.response.data);
        }
    },
    updateInfo : async (data) => {
        set({loading : true})
        try {
            const res = await axios.patch("/auth/update", data)
            set({user : res.data})
            set({loading : false})
            toast.success(res.data.message)
        } catch (error) {
            set({loading : false})
            toast.error(error.response?.data?.message || "An error occured")
        }
    },
    myAddress : async () => {
        set({loading : true})
       try {
        const res = await axios.get("/address")
        set({address : res.data, loading : false})
       } catch (error) {
        set ({loading : false , address : []})
       } 
    },
    addAddress : async(data, reset)=> {
        set({loading : true})
        if (get().address.length >= 3) {
            set({loading : false})
            return toast.error('You can\'t add more than 3 addresses')
        }
        try {
            const res = await axios.post("/address", data)
            set({loading : false})
            toast.success('Address addded succesfully')
            set({address : [...get().address, res.data]})
            reset()
        } catch (error) {
            set({loading : false})
            toast.error(error.response.data?.message || 'An Error occured')
            
        }
    },
    updateAddress : async (data, reset, setEditAddress) => {
        try {

            const res = await axios.put(`/address/${data._id}`,data)
            toast.success (res.data.message || "updated")
            reset({
                street : ''
            })
            setEditAddress(false)
        } catch (error) {
            toast.error(error.response.data?.message || 'An error occured')
        }
    },
    deleteAddress : async(id) => {
        try {
            const res = await axios.delete(`/address/${id}`)
            toast.success (res.data.message || "Address deleted")
            set({address : get().address.filter(addr =>addr._id !== id)})
        } catch (error) {
            toast.error(error.response.data?.message || 'An error occured')
        }
    }
}))