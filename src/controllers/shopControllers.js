const shopControllers = {
    
    shop: async (req, res) => res.render('shop/shop', {
        view: {
            title: "Shop | Funkoshop"  
        }
    }),

    shirts: async (req, res) => res.render('shop/shirts', {
        view: {
            title: "Shirts | Funkoshop"
        }
    }),

    item: (req, res) => res.render('shop/item', {
        view: {
            title: "Item | Funkoshop"  
        },
        data: {
            
        }
    }),
    
    /* {
        // Acá poner la acción para la ruta GET '/item/:id'

        const itemId = req.params.id;
        // Acá realizar la lógica necesaria para encontrar y devolver un producto por su ID

        res.send(`Route for find and retrieve a product from the ID: ${itemId}`);
    } */

    addItemToCart: (req, res) => {
        // Acá poner la acción para la ruta POST '/item/:id/add'
        
        // Acá realizar la lógica necesaria para agregar un elemento al carrito de compras
        res.send('Route for add the current item to the shop cart');
    },

    cart: (req, res) => res.render('shop/cart', {
        view: {
            title: "Cart | Funkoshop"  
        },
    }),

    checkout: (req, res) => {
        // Acá poner la acción para la ruta POST '/cart'

        // Acá realizar la lógica necesaria para ir a la página de finalización de compra
        res.send('Route for go to checkout page');
    }
}

export default shopControllers;