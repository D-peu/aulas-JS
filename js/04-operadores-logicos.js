"use strict"

// Requisitos da escola para aprovação
const mediaminima = 7;
const limitedefaltas = 10;

//Resultados do aluno fictício
let aluno = "Jean";
let mediafinal = 8.5;
let faltas = 8;
let resultado;

/* Operador lógico (and - E) */
/* if ( mediafinal >= mediaminima && faltas < limitedefaltas ){
    resultado = "aprovado";
} else {
    resultado = "reprovado";
} */



/* if ( mediafinal >= mediaminima && faltas <= limitedefaltas ){
    resultado = "aprovado";
} else if ( faltas > limitedefaltas ){
    console.log("reprovado por faltas");
} else {
    resultado = "reprovado"
} */



if ( faltas > limitedefaltas ){
    resultado = "reprovado por faltas";
} else if ( mediafinal >= mediaminima ){
    resultado = "aprovado";
} else {
    resultado = "reprovado";
}

console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`Média do aluno: ${mediafinal}`);
console.log(`Faltas do aluno: ${faltas}`);

console.log("-----------");

/* Operador lógico || (OR - OU) */
let diadasemana = "domingo";
if( diadasemana == "sábado" || "domingo"){
    console.log("final de semana");
} else {
    console.log("Vá trabalhar...");
}

/* Operador lógico ! (NOT - NÃO/NEGATIVO) */
let blackfriday = true;

if( !blackfriday ){
    console.log("Preços normais...");
} else {
    console.log("preços com descontos...");
}