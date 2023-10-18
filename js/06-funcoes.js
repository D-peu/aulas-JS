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

/* Função com parâmetros e retornos de dados/resultados */
function somar(valor1, valor2){
    return valor1 + valor2;
}

/* Chamadasa função diversas vezes
e passando valores diferentes como parâmetros. */
console.log( somar(10,20) );
console.log( somar(15,50) );
console.log( somar(30,47.8) );

/* Formatação de valores em reais */
let preco = 5000;
let desconto = preco * 0.10; // 10%
let precofinal = preco - desconto;

function formatarpreco(valor){
    let opcoes =  {
        style: "currency",
        currency: "BRL"
    };

    return valor.toLocaleString("pt-br", opcoes);
}

console.log(`Preço: ${formatarpreco(preco)}`);
console.log(`Desconto: ${formatarpreco(desconto)}`);
console.log(`Preço final: ${formatarpreco(precofinal)}`);

console.log("---------------------");

/* Sobre Arrow Function
Sintaxe moderna oara funções no JS,
bastante usada por bibliotecas, frameworks
(React, Angular, Vue e etc).

A sintaxe geral é:

const algumNome = () => {};

No entanto, esta sintaxe pode ser mais concisa. */

// Versão 1
/* function dobra(valor){
    return valor * 2;
} */

//Versão 2 (Arrow Function)
/* const dobra = (valor) => {
    return valor * 2;
}; */

// Versão 3 (Arrow Function)
const dobra = valor => valor * 2;

//Chamadas
console.log( dobra(10) );
console.log( dobra(1325) );
console.log( dobra(55.47));