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
        console.log("Error getTrendingMovie:", error.message);

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
        console.log("Error getMovieByCategory:", error.message);

        res.status(500).json({ message: "Server error" });
    }
}


export const getTrailer = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getDataGenresTmdb(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
        res.status(200).json({
            message: "Successfully getTrailer",
            data: data,
        })
        console.log("Data getMovieByID", data);
    } catch (error) {
        console.log("Error getTrailer:", error.message);

        res.status(500).json({ message: "Server error" });
    }
}



export const getSearchMovie = async (req, res) => {
    try {
        const { query } = req.params;

        const data = await getDataGenresTmdb(`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&include_adult=false`);
        res.status(200).json({
            message: "Successfully getSearchMovie",
            data: data,
        })

    } catch (error) {
        console.log("Error getSearchMovie:", error.message);

        res.status(500).json({ message: "Server error" });
    }
}

export const getGenreMovie = async (req, res) => {
    try {
        const { genre } = req.params;
        const data = await getDataGenresTmdb(`https://api.themoviedb.org/3/search/collection?query=${genre}&include_adult=false&language=en-US&page=1`);
        res.status(200).json({
            message: "Successfully getGenreMovie",
            data: data,
        })
    } catch (error) {
        console.log("Error getGenreMovie:", error.message);

        res.status(500).json({ message: "Server error" });
    }
}

export const getDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getDataGenresTmdb(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
        res.status(200).json({
            message: "Successfully getDetails",
            data: data,
        })
    } catch (error) {
        console.log("Error getDetails:", error.message);

        res.status(500).json({ message: "Server error" });
    }
}
