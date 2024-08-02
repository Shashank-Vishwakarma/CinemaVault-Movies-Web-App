import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/userRoutes.js';
import { ENV_VARS } from './config/envVars.js';
import movieRoutes from './routes/movieRoutes.js';

import db from './database/db.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/movie', movieRoutes);

const PORT = ENV_VARS.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})