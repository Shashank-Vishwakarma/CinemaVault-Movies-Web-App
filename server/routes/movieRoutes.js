import express from 'express';
import { getTrailersForMovie, getTrendingMovie, getMovieDetails, getSimilarMovies, getMoviesByCategory } from '../controllers/movieController.js';

const movieRoutes = express.Router();

movieRoutes.get('/trending', getTrendingMovie);
movieRoutes.get('/:movie_id/trailers', getTrailersForMovie);
movieRoutes.get('/:movie_id/details', getMovieDetails);
movieRoutes.get('/:movie_id/similar', getSimilarMovies);
movieRoutes.get('/:category', getMoviesByCategory);

export default movieRoutes;