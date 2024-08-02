import express from 'express';
import { getTrailersForMovie, getTrendingMovie, getMovieDetails, getSimilarMovies, getMoviesByCategory } from '../controllers/movieController.js';
import { protectRoutewithJwt } from '../middlewares/protectRouteWithJwt.js';

const movieRoutes = express.Router();

movieRoutes.get('/trending', protectRoutewithJwt, getTrendingMovie);
movieRoutes.get('/:tvShow_id/trailers', protectRoutewithJwt, getTrailersForMovie);
movieRoutes.get('/:tvShow_id/details', protectRoutewithJwt, getMovieDetails);
movieRoutes.get('/:tvShow_id/similar', protectRoutewithJwt, getSimilarMovies);
movieRoutes.get('/:category', protectRoutewithJwt, getMoviesByCategory);

export default movieRoutes;