const totalItemsTag = document.getElementById('total-items');

const totalTag = document.getElementById('total');
let cantItems = 0;

const finalFinalTag = document.getElementById('finalFinal');


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

      // Calcular la cantidad total de elementos en el carrito
    let totalItems = 0;
    items.forEach(item => {
        const countElement = item.querySelector('.card__quantity-num');
        const count = parseInt(countElement.innerText);
        totalItems += count;
    });

    totalItemsTag.innerText = totalItems;

    for (let i = 0; i < individualTotals.length; i++) {
        total += individualTotals[i];
    }
    totalTag.innerText = total.toFixed(2).replace('.', ',');
    
    const shippingCost = 0;
    const totalWithShipping = total + shippingCost;

    finalFinalTag.innerText = totalWithShipping.toFixed(2).replace('.', ',');


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

// function deleteItem(id) {
//     const countElement = document.getElementById(`count-${id}`);
//     const itemElement = document.querySelector(`[name="items"][data-id="${id}"]`);

//     // Establecer la cantidad del producto a 0
//     countElement.innerText = '0';

//     // Ocultar el elemento de la tarjeta
//     itemSection.style.display = 'none';

//     refresh();
// }


refresh();
document.addEventListener('DOMContentLoaded', () => {
    refresh();
});
