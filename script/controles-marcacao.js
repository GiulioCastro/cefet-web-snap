const checkboxOcultarMarcacoesEl = document.querySelector('#visibilidade-das-marcacoes');

const inputXMarcacao = document.querySelector('#x-da-marcacao');
const inputYMarcacao = document.querySelector('#y-da-marcacao');
const inputLarguraMarcacao = document.querySelector('#largura-da-marcacao');
const inputAlturaMarcacao = document.querySelector('#altura-da-marcacao');
const inputTituloMarcacao = document.querySelector('#titulo-da-marcacao');
const inputConteudoMarcacao = document.querySelector('#conteudo-da-marcacao');
const inputCorMarcacao = document.querySelector('#cor-da-marcacao');

function toggleVisualicacaoMarcacoes(e) {
    marcacoes.forEach((marcacaoEl) => {
        if (e.target.checked) marcacaoEl.style.display = 'none';
        else marcacaoEl.style.display = 'block';
    });
}

function atualizaControles(marcacaoEl) {
    inputXMarcacao.value = parseInt(marcacaoEl.style.left);
    inputYMarcacao.value = parseInt(marcacaoEl.style.top);
    inputLarguraMarcacao.value = parseInt(marcacaoEl.style.width);
    inputAlturaMarcacao.value = parseInt(marcacaoEl.style.height);
    inputTituloMarcacao.value = marcacaoEl.attributes['data-titulo'].value;
    inputConteudoMarcacao.value = marcacaoEl.attributes['data-conteudo'].value;
    inputCorMarcacao.value = marcacaoEl.attributes['data-cor'].value;    
    const formato = marcacaoEl.classList.contains('formato-oval') ? 'formato-oval' : 'formato-retangular';
    const inputFormatoMarcacao = document.querySelector(`input[value][value="${formato}"]`);
    inputFormatoMarcacao.checked = true; 
}

function selecionaMarcacao(marcacaoEl) {
    const marcacaoSelecionada = document.querySelector('.selecionada');
    marcacaoSelecionada.classList.toggle('selecionada');
    marcacaoEl.classList.toggle('selecionada');
}

checkboxOcultarMarcacoesEl.addEventListener('change', toggleVisualicacaoMarcacoes);

marcacoes.forEach((marcacaoEl) => {
    marcacaoEl.addEventListener('click', function (e) {
        atualizaControles(marcacaoEl);
        selecionaMarcacao(marcacaoEl);
    });
});
