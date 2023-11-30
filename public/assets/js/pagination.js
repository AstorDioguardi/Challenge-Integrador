const pages = document.querySelectorAll('.page');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentPage = 0;

function updatePagination() {
    pages.forEach((page, index) => {
        page.parentElement.classList.remove('active');
        if (index === currentPage) {
            page.parentElement.classList.add('active');
        }
    });

// Desactiva el botón "Anterior" en la primera página
    if (currentPage === 0) {
        prevButton.classList.add('disabled');
        } else {
        prevButton.classList.remove('disabled');
    }

// Desactiva el botón "Siguiente" en la última página
    if (currentPage === pages.length - 1) {
        nextButton.classList.add('disabled');
        } else {
        nextButton.classList.remove('disabled');
        }
}

pages.forEach((page, index) => {
    page.addEventListener('click', () => {
        currentPage = index;
        updatePagination();
    });
});

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePagination();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePagination();
    }
});

updatePagination();