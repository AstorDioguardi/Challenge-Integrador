const refresh = () => {
    let total = 0;
    const individualTotals = [];
    let itemCount = 0;

    const items = document.getElementsByName('items');

    items.forEach(item => {
        const priceElement = item.querySelector('.card__item-price_text');
        const price = priceElement.getAttribute('data-price');
        const countElement = item.querySelector('.card__quantity-num');
        const count = countElement.innerText;

        const individualTotal = parseFloat(price.replace(',', '.')) * parseInt(count);
        individualTotals.push(individualTotal);

        total += individualTotal;
        itemCount += parseInt(count);
    });

    // Actualizar la cantidad de elementos en el resumen
    document.querySelector('.summary__content-num').innerText = itemCount;

    // Actualizar el subtotal en el DOM
    const subtotalElement = document.getElementById('subtotal');
    subtotalElement.innerText = total.toFixed(2).replace('.', ',');

    // Actualizar el total en el DOM (incluyendo envío)
    const totalWithShipping = total + 0.00; // Aquí puedes ajustar el costo de envío si es dinámico
    const totalElement = document.getElementById('total');
    totalElement.innerText = totalWithShipping.toFixed(2).replace('.', ',');

    // Actualizar los totales individuales en el DOM
    const totalElements = document.querySelectorAll('.card__price-num span');
    totalElements.forEach((element, index) => {
        element.innerText = individualTotals[index].toFixed(2).replace('.', ',');
    });
};

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

const deleteProduct = (id) => {
    const productSection = document.getElementById(`product-${id}`);
    productSection.remove();

    refresh(); // Actualizar el total después de eliminar el producto
}

refresh();