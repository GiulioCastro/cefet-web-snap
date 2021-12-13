const checkboxOcultarMarcacoesEl = document.querySelector('#visibilidade-das-marcacoes');

const inputXMarcacaoEl = document.querySelector('#x-da-marcacao');
const inputYMarcacaoEl = document.querySelector('#y-da-marcacao');
const inputLarguraMarcacaoEl = document.querySelector('#largura-da-marcacao');
const inputAlturaMarcacaoEl = document.querySelector('#altura-da-marcacao');
const inputTituloMarcacaoEl = document.querySelector('#titulo-da-marcacao');
const inputConteudoMarcacaoEl = document.querySelector('#conteudo-da-marcacao');
const inputCorMarcacaoEl = document.querySelector('#cor-da-marcacao');
const inputsFormato = document.querySelectorAll('input[name][type="radio"][name="formato-da-marcacao"]');

function toggleVisualicacaoMarcacoes(e) {
    marcacoes.forEach((marcacaoEl) => {
        if (e.target.checked) marcacaoEl.style.display = 'none';
        else marcacaoEl.style.display = 'block';
    });
}

function atualizaControles(marcacaoEl) {
    inputXMarcacaoEl.value = parseInt(marcacaoEl.style.left);
    inputYMarcacaoEl.value = parseInt(marcacaoEl.style.top);
    inputLarguraMarcacaoEl.value = parseInt(marcacaoEl.style.width);
    inputAlturaMarcacaoEl.value = parseInt(marcacaoEl.style.height);
    inputTituloMarcacaoEl.value = marcacaoEl.attributes['data-titulo'].value;
    inputConteudoMarcacaoEl.value = marcacaoEl.attributes['data-conteudo'].value;
    inputCorMarcacaoEl.value = marcacaoEl.attributes['data-cor'].value;
    const formato = marcacaoEl.classList.contains('formato-oval') ? 'formato-oval' : 'formato-retangular';
    const inputFormatoMarcacao = document.querySelector(`input[value][value="${formato}"]`);
    inputFormatoMarcacao.checked = true;
}

function selecionaMarcacao(marcacaoEl) {
    const marcacaoSelecionada = document.querySelector('.selecionada');
    marcacaoSelecionada.classList.toggle('selecionada');
    marcacaoEl.classList.toggle('selecionada');
}

marcacoes.forEach((marcacaoEl) => {
    marcacaoEl.addEventListener('click', function (e) {
        atualizaControles(marcacaoEl);
        selecionaMarcacao(marcacaoEl);
    });
});

function atualizaMarcacao(e) {
    const { id, value } = e.target;
    console.log({ id, value })
    const { style, attributes, classList } = document.querySelector('.selecionada');
    switch (id) {
        case 'x-da-marcacao':
            style.left = `${value}px`;
            break;
        case 'y-da-marcacao':
            style.top = `${value}px`;
            break;
        case 'largura-da-marcacao':
            style.width = `${value}px`;
            break;
        case 'altura-da-marcacao':
            style.height = `${value}px`;
            break;
        case 'titulo-da-marcacao':
            attributes['data-titulo'].value = value;
            break;
        case 'conteudo-da-marcacao':
            attributes['data-conteudo'].value = value;
            break;
        case 'cor-da-marcacao':
            attributes['data-cor'].value = value;
            break;
        default:
            if (value === 'formato-oval') {
                if (!classList.contains('formato-oval')) classList.add('formato-oval');
                if (classList.contains('formato-retangular')) classList.remove('formato-retangular');
            } else if (value === 'formato-retangular') {
                if (!classList.contains('formato-retangular')) classList.add('formato-retangular');
                if (classList.contains('formato-oval')) classList.remove('formato-oval');
            }
            break;
    }
}

checkboxOcultarMarcacoesEl.addEventListener('change', toggleVisualicacaoMarcacoes);
inputXMarcacaoEl.addEventListener('change', atualizaMarcacao);
inputYMarcacaoEl.addEventListener('change', atualizaMarcacao);
inputLarguraMarcacaoEl.addEventListener('change', atualizaMarcacao);
inputAlturaMarcacaoEl.addEventListener('change', atualizaMarcacao);
inputTituloMarcacaoEl.addEventListener('change', atualizaMarcacao);
inputConteudoMarcacaoEl.addEventListener('change', atualizaMarcacao);
inputCorMarcacaoEl.addEventListener('change', atualizaMarcacao);
inputsFormato.forEach((inputFormatoEl) => inputFormatoEl.addEventListener('change', atualizaMarcacao))