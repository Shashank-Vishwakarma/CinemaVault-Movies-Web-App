import { fetchMoviesFromTMDB } from "../service/tmdb.js";

export const getTrendingTVShows = async (req, res) => {
    try {
        const data = await fetchMoviesFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US");
        const movie = data?.results[Math.floor(Math.random() * data?.results?.length)];

        res.status(200).json({ content: movie });
    } catch (error) {
        console.log('Error in getTrendingTVShows : ', error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getTrailersForTVShows = async (req, res) => {
    const { tvShow_id } = req.params;
    if (!tvShow_id) {
        return res.status(400).json({ error: "ID not found" });
    }

    try {
        const data = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/tv/${tvShow_id}/videos?language=en-US`);
        res.status(200).json({ content: data?.results });
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null);
        }

        console.log("Error in getTrailersForTVShows: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getTVShowDetails = async (req, res) => {
    const { tvShow_id } = req.params;
    if (!tvShow_id) {
        return res.status(400).json({ error: "ID not found" });
    }

    try {
        const data = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/tv/${tvShow_id}?language=en-US`);
        res.status(200).json({ content: data });
    } catch (error) {
        console.log("Error in getTVShowDetails: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getSimilarTVShows = async (req, res) => {
    const { tvShow_id } = req.params;
    if (!tvShow_id) {
        return res.status(400).json({ error: "ID not found" });
    }

    try {
        const data = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/tv/${tvShow_id}/similar?language=en-US&page=1`);
        res.status(200).json({ content: data?.results });
    } catch (error) {
        console.log("Error in getSimilarTVShows: ", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getTVShowsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const data = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
        res.status(200).json({ content: data?.results });
    } catch (error) {
        console.log("Error in getTVShowsByCategory: ", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}
