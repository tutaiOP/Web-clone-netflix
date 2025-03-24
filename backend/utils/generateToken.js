import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.jwtSecret, {
        expiresIn: "30d",

    });
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: true,
        secure: process.env.NODE_ENV != "development",
    });
    return token;
}