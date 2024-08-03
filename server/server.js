import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import { ENV_VARS } from './config/envVars.js';
import movieRoutes from './routes/movieRoutes.js';
import tvRoutes from './routes/tvRoutes.js';
import searchRoutes from './routes/searchRoutes.js';
import { protectRoutewithJwt } from './middlewares/protectRouteWithJwt.js';

import db from './database/db.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/movie', protectRoutewithJwt, movieRoutes);
app.use('/api/v1/tv', protectRoutewithJwt, tvRoutes);
app.use('/api/v1/search', protectRoutewithJwt, searchRoutes);

const PORT = ENV_VARS.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})