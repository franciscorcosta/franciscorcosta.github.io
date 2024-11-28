// Verifica se a chave 'produtos-selecionados' existe no localStorage. Se não, cria uma lista vazia.
if (!localStorage.getItem('produtos-selecionados')) {
    localStorage.setItem('produtos-selecionados', JSON.stringify([]));
}


document.addEventListener('DOMContentLoaded', function () {
    // Aqui você chama a função carregarProdutos e passa a variável produtos como argumento
    carregarProdutos(produtos);
});



function carregarProdutos(produtos) {
    produtos.forEach(produto => {

        const article = criarProduto(produto);
        document.querySelector('#listaprodutos').append(article);



    });
}






function criarProduto(produto) {


    const article = document.createElement('article');

    // Cria o título do produto
    const titulo = document.createElement('h2')
    titulo.textContent = produto.title
    article.append(titulo)

    //  Cria a imagem do produto
    const imagem = document.createElement('img')
    imagem.src = produto.image
    imagem.alt = produto.title; //Usando o título como texto alternativo para a imagem
    article.append(imagem)

    // Cria o preço do produto
    const preco = document.createElement('h4')
    preco.textContent = 'Custo total: ' + produto.price + '€'
    article.append(preco)



    // Cria a descrição do produto
    const descricao = document.createElement('p');
    descricao.textContent = produto.description; // Assume que 'descricao' é um campo no produto
    article.appendChild(descricao)

    // Cria o botão
    const botao = document.createElement('button');
    botao.textContent = '+ Adicionar ao Cesto'
    article.append(botao)

    //Evento quando o botão for clicado
    botao.addEventListener('click', () => {
        const produtosSelecionados = JSON.parse(localStorage.getItem('produtos-selecionados')) || []
        // Adiciona o produto atual
        produtosSelecionados.push(produto)
        // Atualiza o localStorage com o produto selecionado
        localStorage.setItem('produtos-selecionados', JSON.stringify(produtosSelecionados))
    })

    return article;
}



function criaProdutoCesto(produto) {
    const produtosSelecionados = JSON.parse(localStorage.getItem('produtos-selecionados')) || []

    const article = document.createElement('article')


}


function atualizaCesto() {
   






}








