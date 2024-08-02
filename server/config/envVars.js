import dotenv from 'dotenv';

dotenv.config();

export const ENV_VARS = {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    NODE_ENV: process.env.NODE_ENV,
    TMDB_API_TOKEN: process.env.TMDB_API_TOKEN
}