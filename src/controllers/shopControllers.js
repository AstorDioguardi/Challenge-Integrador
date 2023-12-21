import { ShopServices } from "../services/shopServices.js"

const title = 'Productos'

//itemCart es un mini json para iterar en el carrito
const itemCart = [       
    {
        id: 1,
        img1: "/assets/img/pokemon/pidgeotto-1.webp",
        img2: "../../assets/img/pokemon/pidgeotto-box.webp",
        alt1: "Figura coleccionable Funko de Pidgeotto de la serie Pokemon",
        alt2: "Figura coleccionable Funko de Pidgeotto en caja de la serie Pokemon",
        licence: "POKEMON",
        productName: "PIDGEOTTO",
        price: "1799,99",
        promo: "3 CUOTAS SIN INTERÉS",
        stock: 5
    },
    {
        id: 2,
        img1: "/assets/img/harry-potter/luna-1.webp",
        img2: "../../assets/img/harry-potter/luna-box.webp",
        alt1: "Figura coleccionable Funko de Luna de la película Harry Potter",
        alt2: "Figura coleccionable Funko de Luna en caja de la película Harry Potter",
        licence: "HARRY POTTER",
        productName: "LUNA LOVEGOOD LION MASK",
        price: "3799,99",
        promo: "3 CUOTAS SIN INTERÉS",
        stock: 3
    }
]

export class ShopControllers {

    constructor() {
        this.services = new ShopServices();
    }

    shop = async (_, res) => {

        const products = await this.services.getProducts();

        res.render('shop/shop', { title, products })
    }

    shirts = (req, res) => {
        const title = "Remeras | Funkoshop";
        res.render('shop/shirts', {title});
    }

    keys = (req, res) => {
        const title = "Llaveros | Funkoshop";
        res.render('shop/keys', {title});
    }
    
    item = (req, res) => {
        const title = "Item | Funkoshop";
        res.render('shop/item', {title});
    }
    
    addItemToCart = (req, res) => {
        res.send('Route for add the current item to the shop cart');
    }
    
    cart = (req, res) => {
        const title = "Cart | Funkoshop";
        res.render('shop/cart', {title, itemCart});
    }
    
    checkout = (req, res) => {
        res.send('Route for go to checkout page');
    }
}