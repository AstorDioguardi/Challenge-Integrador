import express from 'express';
import shopControllers from '../controllers/shopControllers.js';

const router = express.Router();

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.item);
router.post('/item/:id/add', shopControllers.addItemToCart);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.checkout);

export default router;
