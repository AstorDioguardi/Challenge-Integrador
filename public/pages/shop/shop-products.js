async function loadProducts() {
    try {
        const response = await fetch('/pages/shop/shopProducts.json');
        const data = await response.json();

        const productsSection = document.getElementById('products-section');
        const productUl = document.createElement('ul');
        productUl.classList.add('galery__items');

        // Asignar la etiqueta por defecto "NUEVO" a todos los productos
        data.products.forEach(product => {
            product.tag = 'NUEVO';

            // Agregar etiquetas adicionales según las propiedades del producto
            if (product.SpecialEdition) {
                product.tag = 'EDICIÓN ESPECIAL';
            }

            if (product.oferta) {
                product.tag = 'OFERTA';
            }
        });

// Filtrar productos según los checkboxes seleccionados
const filterProducts = () => {
    const nuevosCheckbox = document.getElementById('nuevos');
    const edicionEspecialCheckbox = document.getElementById('edicionEspecial');
    const ofertasCheckbox = document.getElementById('ofertas');
    const favoritosCheckbox = document.getElementById('favoritos');

    const filteredProducts = data.products.filter(product => {
        return (
            (!nuevosCheckbox.checked || product.tag === 'NUEVO') &&
            (!edicionEspecialCheckbox.checked || product.tag === 'EDICIÓN ESPECIAL') &&
            (!ofertasCheckbox.checked || product.ofert) &&
            (!favoritosCheckbox.checked || product.tag === 'FAVORITOS')
        );
    });

    renderProducts(filteredProducts);
};

        // Escuchar eventos de cambio en los checkboxes
        document.getElementById('nuevos').addEventListener('change', filterProducts);
        document.getElementById('edicionEspecial').addEventListener('change', filterProducts);
        document.getElementById('ofertas').addEventListener('change', filterProducts);
        document.getElementById('favoritos').addEventListener('change', filterProducts);

        // Renderizar productos en la página
        const renderProducts = (products) => {
            // Limpiar la sección de productos antes de renderizar
            productUl.innerHTML = '';

            products.forEach(product => {
                const productLi = document.createElement('li');
                productLi.classList.add('galery__item');
                productLi.innerHTML = `
                    <article class="card-item">
                        <a class="card-item__link" href="">
                            <picture class="card-item__cover">
                                <span class="card-item__tag">${product.tag}</span>
                                <img class="card-item__img--front" src=${product.img1} alt=${product.alt1}>
                                <img class="card-item__img--back" src=${product.img2} alt=${product.alt2}>
                            </picture>
                        </a>
                        <div class="card-item__content">
                            <a class="card-item__link" href="">
                                <p class="card-item__licence">${product.licence}</p>
                            </a>
                            <a class="card-item__link" href="">
                                <p class="card-item__name">${product.productName}</p>
                            </a>
                            <p class="card-item__price">${product.price}</p>
                            <p class="card-item__promo">${product.promo}</p>
                        </div>
                    </article>`;
                productUl.appendChild(productLi);
            });

            productsSection.appendChild(productUl);
        };

        // Renderizar todos los productos al cargar la página
        renderProducts(data.products);
        const pidgeottoSpecialEdition = document.getElementById('product-7'); // Asigna el id correcto según tu HTML
        if (pidgeottoSpecialEdition) {
            pidgeottoSpecialEdition.style.filter = 'grayscale(100%)';
        }
    } catch (err) {
        console.log("Error al cargar los productos", err);
    }



}

window.addEventListener('load', loadProducts);