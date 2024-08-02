import mongoose from "mongoose";
import { ENV_VARS } from '../config/envVars.js';

const MONGODB_URL = ENV_VARS.MONGODB_URL;
mongoose.connect(MONGODB_URL, {
    dbName: 'CinemaVault'
});

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Connected to database');
});

db.on('disconnected', ()=>{
    console.log('database disconnected');
});

db.on('error', (err)=>{
    console.log('Error connecting to database: ', err);
});

export default db;
