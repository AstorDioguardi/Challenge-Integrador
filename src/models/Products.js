import { Model, Op } from "sequelize";
import { ProductsSchema } from "./schemas/ProductsSchema.js";



class ProductsModel extends Model { }


export class Products extends ProductsSchema {

    constructor() {
        super();
        this.products = ProductsModel;
        this.products.init(this.schema, this.config);
    }

    getProducts = async () => {
        const data = await this.products.findAll();
        const result = data.map(item => item.dataValues)
        return result;
    }


    getProductById = async (id) => {
        const result = await this.products.findOne({ where: { id } });
        return result;
    }

    getProductByName = async (nombre) => {
        const result = await this.products.findOne({ where: { nombre } });
        return result;
    }

    getProductsByMinPrice = async (price) => {
        const result = await this.products.findAll({ where: { precio: { [Op.gt]: price } } });
        return result;
    }

    postProduct = async (product) => {
        const result = await this.products.create(product);
        return result;
    }


    updProduct = async (id, data) => {
        const result = await this.products.update(data, { where: { id } });
        return result;
    }


    delProduct = async (id) =>
        await this.products.destroy({ where: { id } })

} 