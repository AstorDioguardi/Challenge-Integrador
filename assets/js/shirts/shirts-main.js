const dataDb = '../../data/shirts/products-shirts.json';

getData(dataDb);

const miDom = async () => {
    const body = document.querySelector('.galery', '.container');
    body.innerHTML = '';

    const ul = document.createElement('ul');
    ul.className = 'galery__items';

    const products = await getData(dataDb);

    const cards = products.map(card => cardTemplate(
        card.img,
        card.alt,
        card.licence,
        card.productName,
        card.price,
        card.promo
        ));
    ul.innerHTML = cards.join('');

    body.append(ul);
}

miDom();