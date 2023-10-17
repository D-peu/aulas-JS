"use strict"

function convertemoeda(valor){

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

