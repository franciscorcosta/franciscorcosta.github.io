// mousein e mouseout da mensagem
const mensagem = document.getElementById('mensagem');

mensagem.addEventListener('mouseover', function () {
    this.textContent = 'Obrigado por passares!';
});

mensagem.addEventListener('mouseout', function () {
    this.textContent = 'Passa por aqui!';
})




// botões cores 
const botaoVermelho = document.getElementById('vermelho');
const botaoVerde = document.getElementById('verde');
const botaoAzul = document.getElementById('azul');
const texto = document.getElementById('texto');

// Função para mudar a cor do texto
function mudarCorTexto(cor) {
    texto.style.color = cor;
}

// Seleciona todos os botões com o atributo data-color
document.querySelectorAll("button[data-color]").forEach((botao) => {
    botao.addEventListener('click', function () {
        // Usando botao.dataset.color para acessar o valor de data-color
        mudarCorTexto(botao.dataset.color);
    });
});


document.querySelector('select').onchange = function () {
    // Usando this.value para pegar a cor selecionada no <select>
    mudarCorTexto(this.value);
};





// Ao escrever muda a cor da caixa de texto com cores definidas 
function corAleatoria() {
    const colors = ['blue', 'red', 'yellow', 'grey'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function mudacorCaixaTexto() {
    var inputBox = document.getElementById('textInput');
    inputBox.style.backgroundColor = corAleatoria();
}




// Ao escrever uma cor em inglês seguindo de clinar no submeter muda a cor de fundo da página
function MudarCorBackground() {
    const color = document.getElementById('colorInput').value.toLowerCase();
    document.body.style.backgroundColor = color;
}




// contador com botão
// Se não existe a chave 'contador' em localStorage, inicializamos
if (!localStorage.getItem('contador')) {
    localStorage.setItem('contador', 0);
}

// Função para incrementar o contador e atualizar o localStorage
function contar() {
    let contador = parseInt(localStorage.getItem('contador')); // Obtém o valor atual de 'contador'
    contador++; // Incrementa o contador

    // Atualiza o valor do contador no localStorage
    localStorage.setItem('contador', contador);

    // Atualiza a exibição na tela
    document.querySelector('#contador').innerHTML = contador;
}

// Quando a página for carregada, reseta o contador e atualiza a exibição
document.addEventListener('DOMContentLoaded', () => {
    // Sempre que a página for carregada, o valor do contador é zerado
    localStorage.setItem('contador', 0); // Reseta o contador para 0

    // Exibe o valor do contador na tela, que será 0 após o refresh
    document.querySelector('#contador').innerHTML = 0;

    // Adiciona o evento de clique ao botão com ID 'conta' diretamente
    document.querySelector('#conta').addEventListener('click', contar);
});



document.querySelector('form').onsubmit = (e) => {
    // Evitar o envio do formulário
    e.preventDefault();

    // Obter os valores do formulário
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;

    document.getElementById("resultado").innerHTML = "Olá, o " + nome + " tem " + idade + " anos!";
}


// Contador automático
let contador2 = 0; // Inicializa o contador

// Função para incrementar o contador a cada 1 segundo
setInterval(function () {
    contador2++; // Incrementa o contador
    document.getElementById('contador2').innerText = contador2; // Atualiza o valor na página
}, 1000); // 1000 milissegundos = 1 segundo


