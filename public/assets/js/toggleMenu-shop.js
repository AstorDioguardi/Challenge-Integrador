document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('_toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show-menu');
        menuToggle.classList.toggle('open');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('show-menu');
            menuToggle.classList.remove('open');
        }
    });
});