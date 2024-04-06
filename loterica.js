function gerarNumerosUnicos(quantidade, maximo) {
    let numeros = new Set();
    while(numeros.size < quantidade) {
        numeros.add(Math.floor(Math.random() * maximo) + 1);
    }
    return Array.from(numeros).sort((a, b) => a - b);
}

let quantidade = prompt("Quantos números você deseja gerar?");
quantidade = parseInt(quantidade);
const maximo = 50;

if (quantidade > 0 && quantidade <= maximo) {
    let numerosGerados = gerarNumerosUnicos(quantidade, maximo);
    console.log("Números gerados em ordem crescente:", numerosGerados);
} else {
    console.log("Número inválido. Por favor, escolha um número entre 1 e " + maximo);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}