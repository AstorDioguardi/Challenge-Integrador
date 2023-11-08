const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View'),
    item: (req, res) => {
        // Acá poner la acción para la ruta GET '/item/:id'

        const itemId = req.params.id;
        // Acá realizar la lógica necesaria para encontrar y devolver un producto por su ID

        res.send(`Route for find and retrieve a product from the ID: ${itemId}`);
    },
    addItemToCart: (req, res) => {
        // Acá poner la acción para la ruta POST '/item/:id/add'
        
        // Acá realizar la lógica necesaria para agregar un elemento al carrito de compras

        res.send('Route for add the current item to the shop cart');
    },
    cart: (req, res) => res.send('Route for cart View'),
    checkout: (req, res) => {
        // Acá poner la acción para la ruta POST '/cart'

        // Acá realizar la lógica necesaria para ir a la página de finalización de compra

        res.send('Route for go to checkout page');
    }
}

module.exports = shopControllers;