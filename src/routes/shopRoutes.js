import express from 'express';
import shopControllers from '../controllers/shopControllers.js';

const router = express.Router();

router
    .get('/', shopControllers.shop)
    .get('/shirts', shopControllers.shirts)
    .get('/keys', shopControllers.keys)
    .get('/item/:id', shopControllers.item)
    .post('/item/:id/add', shopControllers.addItemToCart)
    .get('/cart', shopControllers.cart)
    .post('/cart', shopControllers.checkout);

export default router;
