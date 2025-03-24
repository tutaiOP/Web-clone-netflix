import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5888/api",
    withCredentials: true
})

export default axiosInstance;