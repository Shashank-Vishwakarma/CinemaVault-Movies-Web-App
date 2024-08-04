import { fetchMoviesFromTMDB } from "../service/tmdb.js";

export const getTrendingMovie = async (req, res) => {
    try {
        const data = await fetchMoviesFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
        const movie = data?.results[Math.floor(Math.random() * data?.results?.length)];

        res.status(200).json({ content: movie });
    } catch (error) {
        console.log('Error in getTrendingMovie : ', error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getTrailersForMovie = async (req, res) => {
    const { movie_id } = req.params;
    if (!movie_id) {
        return res.status(400).json({ error: "ID not found" });
    }

    try {
        const data = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`);
        res.status(200).json({ content: data?.results });
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null);
        }

        console.log("Error in getTrailersForMovie: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getMovieDetails = async (req, res) => {
    const { movie_id } = req.params;
    if (!movie_id) {
        return res.status(400).json({ error: "ID not found" });
    }

    try {
        const data = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`);
        res.status(200).json({ content: data });
    } catch (error) {
        console.log("Error in getMovieDetails: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getSimilarMovies = async (req, res) => {
    const { movie_id } = req.params;
    if (!movie_id) {
        return res.status(400).json({ error: "ID not found" });
    }

    try {
        const data = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/movie/${movie_id}/similar?language=en-US&page=1`);
        res.status(200).json({ content: data?.results });
    } catch (error) {
        console.log("Error in getSimilarMovies: ", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getMoviesByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const data = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
        res.status(200).json({ content: data?.results });
    } catch (error) {
        console.log("Error in getMoviesByCategory: ", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}
