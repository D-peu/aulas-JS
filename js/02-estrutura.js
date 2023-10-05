/* Estruturas de Dados 

 - Arrays (Vetores/Matrizes)
 Lista de dados indexados, sequenciais e acessíveis por um índice numérico.
 
  - Objestos
 Lista de dados não indexados e formados por um propriedades 
 e valores */

//  Arrays 
let cursos = ["Node.js", "React", "SQL", "UX/UI Design"];

console.log(cursos); // saída direta/estruturada (APENAS NO CONSOLE)
console.log(cursos[2]); // SQL



/* Exercício
Crie uma constante chamada "dados" e coloque nela
os dados de uma pessoa: nome, sobrenome, idade telefone e cidade

2) Mostre no console uma mensagem contendo somente o nome e a idade da pessoa. Exemplo: "Fulano tem 25 anos"*/

const dados = ["Sabrina", "Silva", 20, "989129710", "São Paulo"];

console.log(`${dados[0]} tem ${dados[2]} anos`);



console.log("-------");


//Objeto
let carro = {
    marca: "Fiat",
    modelo: "Uno com escada",
    portas: "2",
    cor: "branco",
    opcionais: ["Ar condicionado", "Vidros elétricos", "Alarme"]
}

console.log(carro);
console.log(carro.modelo);

console.log(`Carros da ${carro.marca} tem a cor ${carro.cor}`);

console.log(`Este carro tem ${carro.opcionais[0]}`);