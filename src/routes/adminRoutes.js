import express from 'express';
import adminControllers from '../controllers/adminControllers.js';

const router = express.Router();

router
    .get('/', adminControllers.admin)
    .get('/create', adminControllers.create)
    .post('/create', adminControllers.createItem)
    .get('/edit/:id', adminControllers.edit)
    .post('/edit/:id', adminControllers.editItem)
    .delete('/delete/:id', adminControllers.deleteItem);

export default router;