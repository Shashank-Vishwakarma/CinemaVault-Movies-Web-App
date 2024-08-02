import express from 'express';
import { getTrailersForMovie, getTrendingMovie, getMovieDetails, getSimilarMovies, getMoviesByCategory } from '../controllers/movieController.js';

const movieRoutes = express.Router();

movieRoutes.get('/trending', getTrendingMovie);
movieRoutes.get('/:tvShow_id/trailers', getTrailersForMovie);
movieRoutes.get('/:tvShow_id/details', getMovieDetails);
movieRoutes.get('/:tvShow_id/similar', getSimilarMovies);
movieRoutes.get('/:category', getMoviesByCategory);

export default movieRoutes;