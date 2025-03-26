import { create } from "zustand";
import axiosInstance from "../lib/axios";

export const useContent = create((set) => ({
    content: null,
    movieList: [],
    movieId: [],
    search: [],
    popular: [],

    getTrending: async () => {

        try {
            const data = await axiosInstance.get("/movies/getTrendingMovie");

            set({ content: data.data });

        } catch (error) {
            console.log(error);

        }
    },
    getMovieByGenre: async (category) => {
        try {
            const data = await axiosInstance.get(`/movies/${category}`);

            set({ movieList: data.data.data.results });
        } catch (error) {
            console.log(error);
        }
    },
    getTrailer: async (id) => {
        try {
            const data = await axiosInstance.get(`/movies/${id}/trailer`);

            set({ movieId: data.data.data.results });

        } catch (error) {
            console.log(error);
        }
    },

    getSearchMovie: async (query) => {
        try {
            const data = await axiosInstance.get(`/movies/search/${query}`);

            set({ search: data.data.data.results });
            console.log("Search", data);
        } catch (error) {
            console.log(error);
        }
    },

    getGenreMovie: async (query) => {
        try {
            const data = await axiosInstance.get(`/movies/genre/${query}`);
            set({ search: data.data.data.results });

        } catch (error) {
            console.log(error);
        }
    },

})
);

