import { create } from "zustand";
import axiosInstance from "../lib/axios";

export const useContent = create((set) => ({
    content: null,
    movieList: [],
    getTrending: async () => {

        try {
            const data = await axiosInstance.get("/movies/getTrendingMovie");

            set({ content: data.data });

        } catch (error) {
            console.log(error);

        }
    }


})
);

