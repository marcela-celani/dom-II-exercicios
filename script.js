// selecionando divs a serem utilizadas
const botao = document.getElementById('botao')
const main = document.getElementById('container')

// função: ao clicar no botão, adiciona um article
adicionaItem = (event) => {
    // criando a div
    const article = document.createElement('article')

    // inserindo class na div
    article.setAttribute('class', 'item')

    // colocando div no final da main
    main.insertAdjacentElement('beforeend',article)
}

// função: ao clicar, remove a div
removeItem = (event) => {
    //selecionando elemento
    const quadrado = event.target
    //removendo elemento
    quadrado.remove()
}