const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desativarBotaoSelecionado();

        botao.classList.add('selecionado')

        escondeImgAtiva();

        imagens[indice].classList.add('ativa')

        
    })
});
function escondeImgAtiva() {
    const imagrmAtiva = document.querySelector('.ativa');
    imagrmAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

