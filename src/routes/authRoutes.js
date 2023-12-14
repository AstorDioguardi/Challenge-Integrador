import express from 'express';
import authControllers from '../controllers/authControllers.js';

const router = express.Router();

router
    .get('/login', authControllers.login)
    .post('/login', authControllers.loginPost)
    .get('/register', authControllers.register)
    .post('/register', authControllers.registerPost)
    .get('/logout', authControllers.logout);

export default router;