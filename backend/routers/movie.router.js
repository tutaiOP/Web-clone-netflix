import express from 'express';
import { getMovieByCategory, getTrendingMovie } from '../controller/movie.controller.js';

const router = express.Router();

router.get('/getTrendingMovie', getTrendingMovie);
router.get('/:category', getMovieByCategory);

export default router;