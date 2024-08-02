import { fetchMoviesFromTMDB } from "../service/tmdb.js";
import User from '../models/userModel.js'

export const searchMoviesByActorName = async (req, res) => {
    const { query: actorName } = req.params;
    try {
        const response = await fetchMoviesFromTMDB(`https://api.themoviedb.org/3/search/person?query=${actorName}&include_adult=false&language=en-US&page=1`);
        
        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response?.results[0].id,
                    image: response?.results[0].profile_path,
                    title: response?.results[0].name,
                    searchType: "person",
                    createdAt: new Date()
                }
            }
        });

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
        
        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response?.results[0].id,
                    image: response?.results[0].poster_path,
                    title: response?.results[0].title,
                    searchType: "movie",
                    createdAt: new Date()
                }
            }
        });
        
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
        
        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response?.results[0].id,
                    image: response?.results[0].poster_path,
                    title: response?.results[0].name,
                    searchType: "tv",
                    createdAt: new Date()
                }
            }
        });
        
        res.status(200).json({ content: response?.results });
    } catch(error) {
        console.log("Error in searchMoviesByTVShowName: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getSearchHistory = async (req, res) => {
    try {
        const history = await User.findById(req.user._id).select("searchHistory");
        res.status(200).json({ content: history?.searchHistory });
    } catch(error) {
        console.log("Error in getSearchHistory: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteFromSearchHistory = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndUpdate(req.user._id, {
            $pull: {
                searchHistory: {
                    id: parseInt(id)
                }
            }
        });

        res.status(200).json({ message: "Item removed from search history" });
    } catch(error) {
        console.log("Error in deleteFromSearchHistory: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}
