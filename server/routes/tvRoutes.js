import express from 'express';
import { getSimilarTVShows, getTrailersForTVShows, getTrendingTVShows, getTVShowDetails, getTVShowsByCategory } from '../controllers/tvController.js';

const tvRoutes = express.Router();

tvRoutes.get('/trending', getTrendingTVShows);
tvRoutes.get('/:movie_id/trailers', getTrailersForTVShows);
tvRoutes.get('/:movie_id/details', getTVShowDetails);
tvRoutes.get('/:movie_id/similar', getSimilarTVShows);
tvRoutes.get('/:category', getTVShowsByCategory);

export default tvRoutes;