const totalTag = document.getElementById('total-elemet');

const refresh = () => {
    let total = 0;
    const individualTotals = [];

    const items = document.getElementsByName('items');

    items.forEach(item => {
        const priceElement = item.querySelector('.card__item-price_text');
        const price = priceElement.getAttribute('data-price');
        const countElement = item.querySelector('.card__quantity-num');
        const count = countElement.innerText;

        const individualTotal = parseFloat(price.replace(',', '.')) * parseInt(count);
        individualTotals.push(individualTotal);

        total += individualTotal;
    });

    // Actualizar los totales individuales en el DOM
    const totalElements = document.querySelectorAll('.card__price-num span');
    totalElements.forEach((element, index) => {
        element.innerText = individualTotals[index].toFixed(2).replace('.', ',');
    });
}

const addButton = (id, stock) => {
    const count = document.getElementById(`count-${id}`);

    if (parseInt(count.innerText) < stock)
        count.innerText = parseInt(count.innerText) + 1;

    refresh();
}

const subsButton = (id) => {
    const count = document.getElementById(`count-${id}`);

    if (parseInt(count.innerText) > 0)
        count.innerText = parseInt(count.innerText) -1;

    refresh();
}

refresh();