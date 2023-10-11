"use strict"

let aluno = "Kaio";

let geografia = 2;
let matematica = 5;
let historia = 5;
let artes = 5;
let portugues = 5


// let media = geografia + matematica/2;
let media1 = geografia + matematica + historia + artes + portugues

let media2 = media1 / 5

console.log(media2);

let resultado;

if ( media2 >= 7 ) {
    resultado = "aprovado"
} else if ( media2 >= 5){
    mensagem = "recuperação"
} else {
    resultado = "reprovado"
};

console.log(`O devido a nota ${media2} o ${aluno} está ${resultado}`);