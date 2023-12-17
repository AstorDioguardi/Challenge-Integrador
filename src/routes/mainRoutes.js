import express from 'express';
import mainControllers from '../controllers/mainControllers.js';

const router = express.Router();

router.get('/', mainControllers.home);
router.get('/home', mainControllers.home);
router.get('/contact', mainControllers.contact);
router.get('/about', mainControllers.about);
router.get('/faqs', mainControllers.faqs);


export default router;