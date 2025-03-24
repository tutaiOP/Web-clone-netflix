import express from 'express';
import { checkAuth, Login, Logout, Register } from '../controller/user.controller.js';
import { protectedRouter } from '../middleware/protectedRouter.js';

const router = express.Router();

router.post('/register', Register);

router.post('/login', Login);

router.post('/logout', Logout);

router.get('/checkauth', protectedRouter, checkAuth);

export default router;