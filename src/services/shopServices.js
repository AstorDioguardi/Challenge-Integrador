import { Products } from "../models/Products.js";


export class ShopServices {

    constructor() {
        this.model = new Products();
    }

    getProducts = async () => {
        const result = await this.model.getProducts();
        return result;
    };


    getProductById = async (id) => {
        const result = await this.model.getProductById(id);
        return result;
    }


    getProductByName = async (name) => {
        const result = await this.model.getProductByName(name);
        return result;
    }


    delProduct = async (id) =>
        await this.model.delProduct(parseInt(id));

}