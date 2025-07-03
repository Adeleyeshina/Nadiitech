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
            navigate("/check-email", {state : {type : "signup"}})
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
            toast.error(error.response?.data?.message || 'An Error occured')
            
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
            set((prevState) => ({
                address : prevState.address.map((eachAddress) => {
                   return eachAddress._id === data._id ? {...res.data} : eachAddress
            })
            }))
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occured')
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
    },
    forgetPassword : async (email, navigate) => {
        set({loading : true})
        try {
            const res =await axios.patch("/auth/forget", email)
            set({loading : false})
            toast.success(res.data.message)
            navigate("/check-email", {state : {type : "reset"}})
        } catch (error) {
            set({loading : false})
            toast.error(error.response?.data?.message || 'An error occured')
        }
    },
    resetPassword : async (token, {password}, navigate) => {
        set({loading : true})
        
        try {
            const res = await axios.patch(`/auth/reset/${token}`, {password : password})
            toast.success(res.data.message)
             set({loading : false})
            navigate("/login")
        } catch (error) {
            set({loading : false})
            toast.error(error.response?.data?.message || 'An error occured') 
        }
    },
    refreshToken : async () => {
        if(get().checkingAuth) return
        set({checkingAuth : true})

        try {
            const response = await axios.post("/auth/refresh-token")
            set({checkingAuth : false})
            console.log(response.data)
            return response.data
            
        } catch (error) {
            set({user : null, checkingAuth : false})
            throw error;
        }
    }
}))


let refreshPromise = null;
axios.interceptors.response.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config
        if(error.response?.status === 401 && !originalRequest._retry){
            originalRequest._retry = true

            try {
                if(refreshPromise) {
                    await refreshPromise;
                    return axios(originalRequest)
                }

                refreshPromise = useUserStore.getState().refreshToken()
                await refreshPromise;
                refreshPromise = null

                return axios(originalRequest)
            } catch (error) {
                useUserStore.getState().logout()
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    }
)