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