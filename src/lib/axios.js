import axios from 'axios'

const axiosInstace = axios.create({
    baseURL : `${import.meta.env.VITE_BACKEND_URI}/api`,
    withCredentials : true,
})

export default axiosInstace;