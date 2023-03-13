const toggleBtn_nav = document.getElementById('btn_nav');
const toogleEncabezado = document.getElementById('encabezado');

toggleBtn_nav.addEventListener('click', () => {
    toogleEncabezado.classList.toggle('encabezado--show');
});
