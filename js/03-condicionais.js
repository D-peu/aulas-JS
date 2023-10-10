/* Estrutura de Contorle Condicional
Comandos que permitem analisar uma ou mais condições.
E a partir do resultado desta análise (verdadeiro ou falso), 
o programa pode executar ações diferentes. 

Comandos mais comuns: if (se), else (senão), else if (senão se)*/

let usuario = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");

let mensagem; // indefinida/undefined

// Verificar a idade e determinar se é menor ou maior
if( idade >= 18 ){
    mensagem = "maior";
} else { idade < 18 
    mensagem = "menor";
}

console.log(`${usuario} é ${mensagem} de idade!`);

// Apresentando os resultados APÓS a consicional
console.log(`${usuario} é ${mensagem} de idade!`); 
alert(`${usuario} é ${mensagem} de idade!`)