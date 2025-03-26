import express from 'express';
import { getGenreMovie, getMovieByCategory, getSearchMovie, getTrailer, getTrendingMovie } from '../controller/movie.controller.js';

const router = express.Router();

router.get('/getTrendingMovie', getTrendingMovie);
router.get('/:category', getMovieByCategory);
router.get('/:id/trailer', getTrailer);
router.get('/search/:query', getSearchMovie);
router.get('/genre/:genre', getGenreMovie);


export default router;