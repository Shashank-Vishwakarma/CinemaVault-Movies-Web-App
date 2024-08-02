import express from 'express';
import { searchMoviesByActorName, searchMoviesByMovieName, searchMoviesByTVShowName } from '../controllers/searchController.js';

const searchRoutes = express.Router();

searchRoutes.get('/person/:query', searchMoviesByActorName);
searchRoutes.get('/movie/:query', searchMoviesByMovieName);
searchRoutes.get('/tv/:query', searchMoviesByTVShowName);

export default searchRoutes;
