const cardTemplate = (img, alt, licence, productName, price, promo) => `<li class="galery__item">
                        <article class="card-item">
                            <a class="card-item__link" href="">
                                <picture class="card-item__cover">
                                    <span class="card-item__tag">NUEVO</span>
                                    <img class="card-item__img" src=${img} alt=${alt}>
                                </picture>
                                <div class="card-item__content">
                                    <p class="card-item__licence">${licence}</p>
                                    <h4 class="card-item__name">${productName}</h4>
                                    <p class="card-item__price">${price}</p>
                                    <p class="card-item__promo">${promo}</p>
                                </div>
                            </a>
                        </article>
                    </li>`