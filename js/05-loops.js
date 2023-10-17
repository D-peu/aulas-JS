/* Comandos de repetição
Instruções para realizar ações
por uma quantidade espesífica de vezes.

Comandos tradicionais:
- while     = enquanto
- do/while  = faça enquanto 
- for       = para

Obs.: normalmente o loop é controlado 
através de um variável contadora.*/

/* let contador = 1;
while ( contador <= 5 ){
    console.log(`Valor de contador: ${contador}`);
    contador++; // ++ incremento 
} */



// EXEMPLO DO/WHILE (FAÇA/ENQUANTO)
/* let i = 1;
do {
    console.log(`Contador vale: ${i}`);
    i++;
} while ( i <= 3 ) */

/* Obs,: normalmente variáveis de controle 
de repetições são chamadas de i, j ou k. */



// EXEMPLO FOR (PARA)
/* for ( let i = 1; i <= 10; i++ ){
    console.log(`i vale ${i}`);
} */


/* Loop com array */
let clientes = ["Ozzy", "Dio", "Gillan", "MArtin", "Hughes", "Ardo", "cuida"];

// Cache
let quantidade = clientes.length;

for ( let i = 0; i < quantidade; i++ ){
     console.log(`Cliente: ${clientes[i]}`);
}

console.log("-----------------");

// for/of -> para arrays
let bandas = ["Slayer", "Dream Theater", "Nightwish"];

for (let banda of bandas){
    console.log(banda);
}

console.log("---------");

// for/in -> objetos
let livro = {
    titulo: "HTML5",
    autor: "Maujor",
    site: "https://maujor.com",
    ano: 2016,
    editora: "Novatec",
    edicao: 3
};

// para PROPRIEDADE dentro/em LIVRO
for(let dados in livro){
    // Acessar APENAS a propriedade
    // console.log(dados);

    // Acessar VALOR de cada propriedade
    // console.log(livro[dados]);

    console.log(`${dados} -> ${livro[dados]}`);
}