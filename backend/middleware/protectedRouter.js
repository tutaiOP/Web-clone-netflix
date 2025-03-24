import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../model/User.model.js';

dotenv.config();

export const protectedRouter = async (req, res, next) => {
    try {
        const token = req.cookies["token"];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.jwtSecret);
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized Decode" });
        }
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized User" });
        }
        req.user = user;
        next();

    } catch (error) {
        console.log("Error message: ", error.message);
        return res.status(500).json({ message: "Invalid server" });
    }
}