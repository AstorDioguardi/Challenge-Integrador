import express from 'express';
import adminControllers from '../controllers/adminControllers.js';
import { uploadMiddleware } from '../middlewares/uploadMiddleware.js'


const router = express.Router();

router
    .get('/', adminControllers.admin)
    .get('/create', adminControllers.create)
    .post('/create', uploadMiddleware.array('image', 2), adminControllers.createItem)
    .get('/edit/:id', adminControllers.edit)
    .post('/edit/:id', adminControllers.editItem)
    .delete('/delete/:id', adminControllers.deleteItem);

export default router;