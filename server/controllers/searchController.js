import { fetchMoviesFromTMDB } from "../service/tmdb.js";

export const searchMoviesByActorName = async (req, res) => {
    const { query: actorName } = req.params;
    try {
        const response = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/search/person?query=${actorName}&include_adult=false&language=en-US&page=1`);
        res.status(200).json({ content: response?.results });
    } catch(error) {
        console.log("Error in searchMoviesByActorName: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const searchMoviesByMovieName = async (req, res) => {
    const { query: movieName } = req.params;
    try {
        const response = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`);
        res.status(200).json({ content: response?.results });
    } catch(error) {
        console.log("Error in searchMoviesByMovieName: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const searchMoviesByTVShowName = async (req, res) => {
    const { query: tvShowName } = req.params;
    try {
        const response = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${tvShowName}&include_adult=false&language=en-US&page=1`);
        res.status(200).json({ content: response?.results });
    } catch(error) {
        console.log("Error in searchMoviesByTVShowName: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}
