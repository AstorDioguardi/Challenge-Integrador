const pages = document.querySelectorAll('.page')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let currentPage = 1

function showPage(pageNumber) {
    pages.forEach(page => page.classList.remove('.active'))
    pages[pageNumber - 1].classList.add('active')
}

pages.forEach((page, shirts) => {
    page.addEventListener('click', () => {
        currentPage = shirts + 1
        showPage(currentPage)
    })
})

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--
        showPage(currentPage)
    }
})

nextButton.addEventListener('click', () => {
    if (currentPage < pages.length) {
        currentPage++
        showPage(currentPage)
    }
})

showPage(currentPage)