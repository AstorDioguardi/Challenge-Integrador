import express from 'express';
import {ShopControllers} from '../controllers/shopControllers.js';

/*const router = express.Router();
router
    .get('/', shopControllers.shop)
    .get('/shirts', shopControllers.shirts)
    .get('/keys', shopControllers.keys)
    .get('/item/:id', shopControllers.item)
    .post('/item/:id/add', shopControllers.addItemToCart)
    .get('/cart', shopControllers.cart)
    .post('/cart', shopControllers.checkout);

export default router;*/

export class ShopRoutes extends express.Router {

    constructor() {
        super();
        this.controller = new ShopControllers();
        this
            .get('/', this.controller.getProducts)
            .get('/name/:name', this.controller.getProductByName)
            .get('/delete/:id', this.controller.delProduct)
            .get('/:id', this.controller.getProductById)
    }

}