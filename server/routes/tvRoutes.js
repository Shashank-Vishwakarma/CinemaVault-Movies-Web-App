import express from 'express';
import { getSimilarTVShows, getTrailersForTVShows, getTrendingTVShows, getTVShowDetails, getTVShowsByCategory } from '../controllers/tvController.js';
import { protectRoutewithJwt } from '../middlewares/protectRouteWithJwt.js';

const tvRoutes = express.Router();

tvRoutes.get('/trending', protectRoutewithJwt, getTrendingTVShows);
tvRoutes.get('/:movie_id/trailers', protectRoutewithJwt, getTrailersForTVShows);
tvRoutes.get('/:movie_id/details', protectRoutewithJwt, getTVShowDetails);
tvRoutes.get('/:movie_id/similar', protectRoutewithJwt, getSimilarTVShows);
tvRoutes.get('/:category', protectRoutewithJwt, getTVShowsByCategory);

export default tvRoutes;