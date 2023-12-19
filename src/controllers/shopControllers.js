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