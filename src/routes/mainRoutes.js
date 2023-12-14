import express from 'express';
import mainControllers from '../controllers/mainControllers.js';

const router = express.Router();

router
    .get('/home', mainControllers.home)
    .get('/contact', mainControllers.contact)
    .get('/about', mainControllers.about)
    .get('/faqs', mainControllers.faqs);


export default router;