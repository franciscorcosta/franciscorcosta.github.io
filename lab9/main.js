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

    return article;
}



