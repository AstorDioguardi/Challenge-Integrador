
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Función para cargar el JSON y devolverlo como objeto
const loadJsonData = async () => {
    try {
        const data = await fs.readFile(join(__dirname, '../../public/pages/shop/shopProducts.json'), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error loading JSON data: ${error.message}`);
        throw error;
    }
};

// Función que retorna la lectura del JSON como objeto
const getJsonData = async () => {
    return await loadJsonData().catch(err => {
        console.error(err);
        return {}; // Puedes retornar un objeto vacío o manejar el error según tus necesidades
    });
};

// Asigna el resultado de la función a la variable jsonData
const itemCart = await getJsonData();


const shop = async (req, res) => {
    const title = "Shop | Funkoshop";
    res.render('shop/shop', {title});
}

const shirts = async (req, res) => {
    const title = "Remeras | Funkoshop";
    res.render('shop/shirts', {title});
}

const keys = (req, res) => {
    const title = "Llaveros | Funkoshop";
    res.render('shop/keys', {title});
}

const item = (req, res) => {
    const title = "Item | Funkoshop";
    res.render('shop/item', {title});

}


const addItemToCart = (req, res) => {
    // Acá poner la acción para la ruta POST '/item/:id/add'
    
    // Acá realizar la lógica necesaria para agregar un elemento al carrito de compras
    res.send('Route for add the current item to the shop cart');
}


const cart = (req, res) => {
    const title = "Cart | Funkoshop";
    res.render('shop/cart', {title, itemCart});
}

const checkout = (req, res) => {
    // Acá poner la acción para la ruta POST '/cart'

    // Acá realizar la lógica necesaria para ir a la página de finalización de compra
    res.send('Route for go to checkout page');
}


const shopControllers = {
    shop,
    shirts,
    keys,
    item,
    addItemToCart,
    cart,
    checkout
}

export default shopControllers;
console.log(itemCart)