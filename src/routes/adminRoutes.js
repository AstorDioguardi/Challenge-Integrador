import express from 'express';
import adminControllers from '../controllers/adminControllers.js';

const router = express.Router();

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.createItem);
router.get('/edit/:id', adminControllers.edit);
router.post('/edit/:id', adminControllers.editItem);
router.delete('/delete/:id', adminControllers.deleteItem);

export default router;