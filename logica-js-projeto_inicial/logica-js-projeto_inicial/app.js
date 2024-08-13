alert('Bem vindo ao nosso jogo');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let = tentativas = 1;
let chute;

while(chute!=numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

if(numeroSecreto == chute){
    break;    
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else{
       if(chute>numeroSecreto){
        alert(`O numero secreto é menor que ${chute}`);
       }else{
        alert(`O numero secreto é maior que ${chute}`);
       }tentativas++;
    } 
   


}

let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}.`);
