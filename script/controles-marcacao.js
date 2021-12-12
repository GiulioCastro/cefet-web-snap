const checkboxOcultarMarcacoesEl = document.querySelector('#visibilidade-das-marcacoes');
const marcacoes = document.querySelectorAll('.marcacao ');

checkboxOcultarMarcacoesEl.addEventListener('change', function(e) {
    marcacoes.forEach((el) => {
        if(e.target.checked) el.style.display = 'none';
        else el.style.display = 'block';
    })    
});