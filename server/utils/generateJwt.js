import jwt from "jsonwebtoken";
import { ENV_VARS } from '../config/envVars.js';

export const generateJwt = (payload) => {
    return jwt.sign({ payload }, ENV_VARS.JWT_SECRET_KEY, { expiresIn: '15d' });
};
