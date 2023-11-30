const toggleAside = document.getElementById('toggleAside');

toggleAside.addEventListener('click', () => {
    const aside = document.getElementById('filterAside');
    aside.classList.toggle('visible');
  })