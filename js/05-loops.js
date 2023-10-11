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
let contador = 1;
do {
    console.log(`Contador vale: ${contador}`);
    contador++;
} while ( contador <= 3 )