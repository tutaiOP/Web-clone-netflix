import { create } from "zustand";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";

export const useAuth = create((set) => ({
    user: null,
    Register: async (data) => {
        try {
            const respond = await axiosInstance.post("/auth/register", data);
            set({ user: respond.user });
            toast.success("Đăng ký thành công");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    },
    Login: async (data) => {
        try {
            const respond = await axiosInstance.post("/auth/login", data);
            set({ user: respond.data.user });

            toast.success("Đăng nhập thành công");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    },
    Logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ user: null });
            toast.success("Đăng xuất thành công");
        } catch (error) {
            console.log(error);

        }
    },
    checkAuth: async () => {
        try {
            const respond = await axiosInstance.get("/auth/checkauth");
            set({ user: respond.data.user });

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    },

}));