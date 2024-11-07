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

// Eventos de clique nos botões

// Vermelho
botaoVermelho.addEventListener('click', function () {
    mudarCorTexto('red');
});

// Verde
botaoVerde.addEventListener('click', function () {
    mudarCorTexto('green');
});

// Azul
botaoAzul.addEventListener('click', function () {
    mudarCorTexto('blue');
});


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










// contador com botão
let count = 0;

function contar() {
    count++;
    document.querySelector('#contador').innerHTML = count;
}

// Passa a função contar no onclick
document.querySelector('#conta').onclick = contar;