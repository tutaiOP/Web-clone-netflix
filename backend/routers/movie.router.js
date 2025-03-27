import express from 'express';
import { getDetails, getGenreMovie, getMovieByCategory, getSearchMovie, getTrailer, getTrendingMovie } from '../controller/movie.controller.js';

const router = express.Router();

router.get('/getTrendingMovie', getTrendingMovie);
router.get('/:category', getMovieByCategory);
router.get('/:id/trailer', getTrailer);
router.get('/search/:query', getSearchMovie);
router.get('/genre/:genre', getGenreMovie);
router.get('/:id/details', getDetails);


export default router;