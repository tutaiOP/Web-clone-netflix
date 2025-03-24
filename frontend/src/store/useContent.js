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
    },

    getMovieByCategory: async (category) => {
        try {
            const data = await axiosInstance.get(`/movies/${category}`);
            set({ movieList: data.data.data.results });
            console.log("Check list movie", data.data.data.results)
        } catch (error) {
            console.log(error);
        }
    }

})
);

