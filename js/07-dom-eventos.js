"use strict";

/* Funções de seleção no DOM

-getElementById()
Seleciona UM elemento através de um id.

-querySelector()
Seleciona UM elemento através de um seletor.

-querySelectorAll()
seleciona VÁRIOS elementos através de um/vários seletor(es)*/

/* Exemplos */
const subtitulo = document.getElementById("subtitulo-dom");

const desenho = document.querySelector(".exemplo");

const descricao = document.querySelector("#descricao");

console.log(desenho);
console.log(descricao);


const varioselementos = document.querySelectorAll("h3, a");

console.log(varioselementos);
console.log(varioselementos[1]);


// Modificando o DOM
const titulo = document.querySelector("h1");
titulo.textContent = "Olá Javascript";
titulo.style.textAlign = "center"; // CSS inline via JS
titulo.classList.add("destaque"); // Classe CSS via JS 


/* Selecionar os links contidos na listas */
const linksReferencia = document.querySelectorAll("ul li a");

let quantidadedelinks = linksReferencia.length;

for(let link of linksReferencia){
    link.setAttribute("target","blank");
}

/* for ( let i = 0; i < quantidadedelinks; i++ ){
    linksReferencia[i].setAttribute("target","_blank");
} */