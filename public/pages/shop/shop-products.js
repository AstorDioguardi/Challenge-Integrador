async function loadProdcuts() {
    try {
        const response = await fetch('/pages/shop/shopProducts.json')
        const data = await response.json()

        const productsSection = document.getElementById('products-section')
        const productUl = document.createElement('ul')
        productUl.classList.add('galery__items')

        data.products.forEach(product => {
            const productLi = document.createElement('li')
            productLi.classList.add('galery__item')
            productLi.innerHTML = `
            <article class="card-item">
                <a class="card-item__link" href="">
                    <picture class="card-item__cover">
                        <span class="card-item__tag">NUEVO</span>
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
            </article>`
        productUl.appendChild(productLi)
        })

        productsSection.appendChild(productUl)
    }
    catch (err) {
        console.log("Error al cargar los productos", err)
    }
}

window.addEventListener('load', loadProdcuts)