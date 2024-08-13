console.log('Boas vindas');

let nome= 'diogo';
console.log(`Olá ${nome}`);

let nome = 'diogo';
alert(`Olá, ${nome}`);

let linguagem = prompt('Qual a linguagem de programação que você mais gosta?')/
console.log(linguagem);

let valor1 = 15;
let valor2 = 25;
let resultado = valor1+valor2;
console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}`);

let valor1 = 25;
let valor2 = 15;
let subtração = valor1- valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

let idade = prompt("Digite sua idade");
if(idade>=18){
    console.log("Você é maior de idade");
}else{
    console.log('Você é menor de idade');
}

var numero = parseFloat(prompt("Digite um numero"));
if(numero<0){
    console.log("Esse numero é negativo");
}else if{
    console.log("Esse numero é zero");
}else{
    console.log("Esse numero é positivo");
}

numero =1;
while(numero <= 10){
    console.log(numero);
    numero ++;
}

let nota=7
if(nota<7){
    console.log("Reprovado");

}else{
    console.log("Aprovado");
}

let numeroSecreto = Math.random();
console.log(numeroSecreto);

let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);

let numeroSecreto = parseInt(Math.random() * 1000 + 1);
console.log(numeroSecreto);