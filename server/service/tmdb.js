import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchMoviesFromTMDB = async (url) => {
    try {
        const response = await axios.get(
            url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + ENV_VARS.TMDB_API_TOKEN
                }
            }
        );

        return response.data;
    } catch(error) {
        console.log("Error in fetchMovies: ", error);
        throw new Error(error.message);
    }
}
