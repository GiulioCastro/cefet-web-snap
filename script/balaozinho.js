
const marcacoes = document.querySelectorAll('.marcacao');
const balaozinhoEl = document.querySelector('#balaozinho');

marcacoes.forEach((marcacaoEl) => {
    marcacaoEl.addEventListener('mouseover', function (e) {
        const titulo = marcacaoEl.attributes['data-titulo'].value;
        const conteudo = marcacaoEl.attributes['data-conteudo'].value;
        const corTexto = marcacaoEl.attributes['data-cor'].value;
        balaozinhoEl.style.color = corTexto;
        balaozinhoEl.style.top = `${e.pageY}px`;
        balaozinhoEl.style.left = `${e.pageX}px`;
        balaozinhoEl.innerHTML = `
            <h2>${titulo}</h2>
            <p>${conteudo}</p>
        `;
    });
    marcacaoEl.addEventListener('mousemove', function (e) {
        balaozinhoEl.style.top = `${e.pageY}px`;
        balaozinhoEl.style.left = `${e.pageX}px`;
    });
    marcacaoEl.addEventListener('mouseout', function (e) {
        balaozinhoEl.innerHTML = "";
    });
})