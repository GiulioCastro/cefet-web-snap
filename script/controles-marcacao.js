const checkboxOcultarMarcacoesEl = document.querySelector('#visibilidade-das-marcacoes');
const marcacoes = document.querySelectorAll('.marcacao ');

checkboxOcultarMarcacoesEl.addEventListener('change', function(e) {
    marcacoes.forEach((marcacaoEl) => {
        if(e.target.checked) marcacaoEl.style.display = 'none';
        else marcacaoEl.style.display = 'block';
    })    
});