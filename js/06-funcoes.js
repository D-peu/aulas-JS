"use strict"

/* Sobre funções

Funções são blocos de código que podem ser executados e reaproveitados em praticamente qualquer lugar de uma aplicação/site.

Ussar funções também é benefico do ponto de vista de organização de código.

O JS já possui centenas de funções prontas:
Exemplos: log(), alert(), toFixed(2) e etc */

/* Comom escrever funções no JS? */

// Forma 1: função anônima
const exemplo1 = function(){
    console.log("Função anônima");
}

// Forma 2: fução nomeada/declarada
function exemplo2(){
    console.log("Função nomeada/declarada");
}

// Forma 3: arrow function
const exemplo3 = () => {
    console.log("arrow function");
};

// Chamada de função para execução
exemplo1();
exemplo2();
exemplo3();

/* Exemplos diversos */

function somar(valor1, valor2){
    valor1 + valor2;
}

console.log( somar(10,20));
console.log( somar(15,50));
console.log( somar(30,47.8));