import express from 'express';
import {ShopControllers} from '../controllers/shopControllers.js';
// import router from './mainRoutes.js';

const router = express.Router();
const controller = new ShopControllers();
router
    .get('/', controller.shop)
    .get('/shirts', controller.shirts)
    .get('/keys', controller.keys)
    .get('/item/:id', controller.item)
    .post('/item/:id/add', controller.addItemToCart)
    .get('/cart', controller.cart)
    .post('/cart', controller.checkout);

export default router;