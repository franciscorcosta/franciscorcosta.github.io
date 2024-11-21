document.addEventListener('DOMContentLoaded', function () {
    // Aqui você chama a função carregarProdutos e passa a variável produtos como argumento
    carregarProdutos(produtos);
});






function carregarProdutos(produtos) {
    produtos.forEach(produto => {

        const article = criarProduto(produto);
        document.querySelector('#listaprodutos').append(article);
        

       const imagem = criarProduto(produto)
       document.querySelector('#listaprodutos').append(imagem)
 


    });
}



function criarProduto(produto) {


    const article = document.createElement('article');

    // Cria o título do produto
    const titulo = document.createElement('h2')
    titulo.textContent = produto.title
    article.append(titulo)

    //  Cria a imagem do produto mas está a aparecer em duplicado (Resover depois)
    const imagem = document.createElement('img')
    imagem.src = produto.image
    imagem.alt = produto.title; //Usando o título como texto alternativo para a imagem
    article.append(imagem)


    // Cria a descrição do produto
    







    return article;
}



