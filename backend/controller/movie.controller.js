import { getDataGenresTmdb } from "../Services/tmdb.genres.js"


export const getTrendingMovie = async (req, res) => {
    try {
        const getData = await getDataGenresTmdb('https://api.themoviedb.org/3/trending/movie/day?language=en-US');
        const randomTrending = getData.results[Math.floor(Math.random() * getData.results.length)];
        res.status(200).json({
            message: "Successfully getTrendingMovie",
            data: randomTrending,
        });
    } catch (error) {
        console.error("Error getTrendingMovie:", error.message);

        res.status(500).json({ message: "Server error" });
    }
}

export const getMovieByCategory = async (req, res) => {
    try {

        const { category } = req.params;
        const data = await getDataGenresTmdb(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
        res.status(200).json({
            message: "Successfully getMovieByCategory",
            data: data,
        })
    } catch (error) {
        console.error("Error getMovieByCategory:", error.message);

        res.status(500).json({ message: "Server error" });
    }
}