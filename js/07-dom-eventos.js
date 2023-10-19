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



/* Manipulando Eventos */
const pagina = document.querySelector("body");
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");

const reprodutoraudio = document.querySelector("#reprodutor-audio");
const imagemmeme = document.querySelector("#imagem-meme");


// Ouvinte de evento
exemplo01.addEventListener("click", function(){
    pagina.style.fontFamily = "Verdana";
    mensagem.textContent = "Fonte alterada!";
    mensagem.style.backgroundColor = "yellow";

    // Executamos o áudio com play
    reprodutoraudio.play();

    // Removemos o atributo hidden (portanto, a imagem aparecerá)
    imagemmeme.removeAttribute("hidden");
});

// Exemplo modo noturno
const botao = document.querySelector("#noturno");

botao.addEventListener("click", gerenciadormodonoturno);


function gerenciadormodonoturno(){
    pagina.classList.toggle("modo-noturno")

    /* Exercicio */
    /* Se a página estiver com a classe chamada "modo-noturno", então mude o texto do botão para "desativar".
    Caso contrário, faça o botão exibir o texto "ativar" */

    /* Se pagina contem a classe modo-noturno */
    if (pagina.className == "modo-noturno"){
        // mude o texto do botão para "Desativar"
        botao.textContent = "Desativar";
    } else{
        botao.textContent = "Ativar";
    }
    
}



