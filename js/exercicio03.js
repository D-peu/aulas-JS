"use strict"

// MINHA TENTATIVA
/* function convertemoeda(valor){

    return valor * 5.03;
}


let valoremdolar = 100

let valorconvertido =  convertemoeda(valoremdolar)

let real = {
    style: "currency",
    currency: "BRL"
};

let dolar =  {
    style: "currency",
    currency: "USD"
};

 console.log(`Reais = ${valorconvertido.toLocaleString("pt-br", real)}`);
 console.log(`Dolar = ${valoremdolar.toLocaleString("en", dolar)}`);
 */





// CORREÇÂO

// Dados de entrada (exemplos de valores)
let valorDaCotacaoDoDia = 5.03;
let valorEmDolares = 2500;

// Função que realiza a conversão matemática ao receber PARÂMETROS
function converteMoeda( valor, cotacao ){
    return valor * cotacao;
}

// Variável que receberá o resultado processado pela função DEPOIS que
// a função terminar sua execução
let valorConvertido = converteMoeda(valorDaCotacaoDoDia, valorEmDolares);

// Saídas após o processamento
//console.log(valorEmDolares); // quanto que era em dólares
//console.log(valorConvertido); // quanto que fica em reais

console.log( formatarMoeda(valorEmDolares, "en", "USD") );
console.log( formatarMoeda(valorConvertido, "pt-br", "BRL"));

function formatarMoeda(valor, local, moeda){
    let opcoes = {
        style: "currency",
        currency: moeda
    };

    return valor.toLocaleString(local, opcoes);
}