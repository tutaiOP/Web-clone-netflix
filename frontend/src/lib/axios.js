import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5777/api",
    withCredentials: true
})

export default axiosInstance;