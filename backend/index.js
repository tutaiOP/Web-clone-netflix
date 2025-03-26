import express from 'express';
import Auth from './routers/user.router.js';
import Movie from './routers/movie.router.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDB } from './libs/db.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5777;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true
}))
app.use('/api/auth', Auth);
app.use('/api/movies', Movie);


app.listen(PORT, () => {
    console.log('Server is running on http://localhost:5777');
    connectDB();
});

