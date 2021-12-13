
const inputFiltroDaFotoEl = document.querySelector('#filtro-da-foto');
const fotoAnotadaEl = document.querySelector('.foto-anotada img');
inputFiltroDaFotoEl.addEventListener('change', function(e) {
    fotoAnotadaEl.style.filter = e.target.value;
});