import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

import { ENV_VARS } from '../config/envVars.js';

export const protectRoutewithJwt = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Token not found' });
    };

    try {
        const decodedPayload = jwt.verify(token, ENV_VARS.JWT_SECRET_KEY);

        if(!decodedPayload) {
            return res.status(401).json({ error: 'Unauthorized - Invalid Token' });
        }

        const user = await User.findById(decodedPayload.payload.id);
        if(!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        req.user = user;
        next();
    } catch(err) {
        res.status(500).json({ error: `Error in verifying token: ${err}` })
    }
};
