
 // import { promises as fs } from 'fs';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// global.jsonData = {}; // Inicializa como objeto vacío

// async function loadJsonData() {
//     try {
//         const data = await fs.readFile(join(__dirname, '../../public/pages/shop/shopProducts.json'), 'utf8');
//         global.jsonData = JSON.parse(data);
//     } catch (error) {
//         console.error(`Error loading JSON data: ${error.message}`);
//     }
// }

// // Llama a loadJsonData al inicio de tu aplicación
// await loadJsonData().catch(err => console.error(err));
// así funciona con malas practicas


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
const jsonData = await getJsonData();

const shop = async (req, res) => {
    res.render('shop/shop', {
        view: {
            title: "Shop | Funkoshop"
        }},
        );
}

const shirts = async (req, res) => {
    res.render('shop/shirts', {
        view: {
            title: "Remeras | Funkoshop"
        }
    });
}

const keys = (req, res) => {
    res.render('shop/keys', {
        view: {
            title: "Llaveros | Funkoshop"
        }
    });
}

const item = (req, res) => {
    res.render('shop/item', {
        view: {
            title: "Item | Funkoshop"  
        },
        data: {
            jsonData
        }
    });
}

const addItemToCart = (req, res) => {
    // Acá poner la acción para la ruta POST '/item/:id/add'
    
    // Acá realizar la lógica necesaria para agregar un elemento al carrito de compras
    res.send('Route for add the current item to the shop cart');
}

const cart = (req, res) => {
    res.render('shop/cart', {view: {title: "Cart | Funkoshop"}})
}

const checkout = (req, res) => {
    // Acá poner la acción para la ruta POST '/cart'

    cart: (req, res) => {
        let myVariable = "some value"; // Define tu variable aquí
        res.render('shop/cart', {
            view: {
                title: "Cart | Funkoshop",
                jsonData: jsonData // Pasa tu variable a la vista
            },
        });
    }

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
console.log(jsonData.products[0].id)