// butões cores 



// vermelho

// verde

// azul


//botão submeter



// contador com botão
let count = 0;

function contar() {
    count++;
    document.querySelector('#contador').innerHTML = count;
}

// Corrigido: passa a função contar no onclick
document.querySelector('#conta').onclick = contar;