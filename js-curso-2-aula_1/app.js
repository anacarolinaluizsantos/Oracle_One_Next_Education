let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto 2.0');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1','O número é menor');
        }else{
            exibirTextoNaTela('h1','O número é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if(quantidadeElementosLista == numeroLimite){
        listaNumerosSorteados = [];
    }


    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
       return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}

// Exercicios ARRAY
/*1*/
/*let listaGenerica = [];*/

/*2*
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
console.log(linguagensDeProgramacao);
/*3*
linguagensDeProgramacao.push('Java','Ruby','GoLang');
console.log(linguagensDeProgramacao)
*/
/*4
let nome = ['Ana', 'Lucy','Roberta'];
*/
/*5
console.log(nome[0]);*/
/*6
    console.log(nome[1]);
    console.log(nome[2]);
*/


//Exercícios FUNCTION

/*1.*/
/*function calcIMC(peso, altura){
    return peso / (altura * altura);
}
calcIMC(peso, altura);
*/
/*2.*/
/*function calcFatorial(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }
    let fatorial = 1;
    for(let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    return fatorial;
}
let numero = 5;
let resultado = calcFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
*/
/*3*/
/*function cotDolar(dolar){
    return reais = dolar * 4.80;
}
cotDolar(8.00);
*/
/*4*/
/*4.function areaPerimetro(base,altura){
    return area = base * altura;
}
function Perimetro(base, altura){
    return perimetro = 2 *(base + altura);
}
let base = 5;
let altura = 2;
console.log(`Valor da área: ${area}`);
console.log(`Perímetro : ${perimetro}`);
areaPerimetro(base,altura);
perimetro(base,altura);
*/
/*5.*/
/*function areaCirculo(raio){
    return areaCirculo = 3.14 * raio;
}
function PeriCirculo(raio){
    return p = 2 * 3.14 * raio;
}
areaCirculo(raio);
PeriCirculo(raio);
*/
/*6.*/
/*function Tabuada(numero){
    for(let i = 0; i <= 10; i++){
        let t = numero * i;
        console.log(`${numero} * ${i} = ${t}`);
    }
}
let r = Tabuada(numero);
/*function olaMundo(){
    console.log('Olá Mundo!!!');
}
olaMundo();
/*function mostraDobro(numero){
    return numero * 2;
}
mostraDobro();
*/
/*function media(n1,n2,n3){
    return media = (n1+n2+n3) / 3;

}
media(n1,n2,n3)*/
/*function maiorNumero(n1,n2){
    if(n1 > n2){
        return n1;
    }else if(n2 > n1){
        return n2;
    }
}
maiorNumero();
*/

