import express from 'express';
import Auth from './routers/user.router.js';
import Movie from './routers/movie.router.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDB } from './libs/db.js';
import cors from 'cors';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 5777;

const app = express();
const __dirname = path.resolve();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use('/api/auth', Auth);
app.use('/api/movies', Movie);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')))
    app.get('*', (req, res) => res.sendFile
        (path.join(__dirname, '../frontend', 'dist', 'index.html')))
}


app.listen(PORT, () => {
    console.log('Server is running on http://localhost:5777');
    connectDB();
});

