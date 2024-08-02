import express from 'express';
import { searchMoviesByActorName, searchMoviesByMovieName, searchMoviesByTVShowName, getSearchHistory, deleteFromSearchHistory } from '../controllers/searchController.js';

const searchRoutes = express.Router();

searchRoutes.get('/person/:query', searchMoviesByActorName);
searchRoutes.get('/movie/:query', searchMoviesByMovieName);
searchRoutes.get('/tv/:query', searchMoviesByTVShowName);

searchRoutes.get('/history', getSearchHistory);
searchRoutes.delete('/history/:id', deleteFromSearchHistory);

export default searchRoutes;
