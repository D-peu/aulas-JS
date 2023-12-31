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
};

console.log(carro);
console.log(carro.modelo);

console.log(`Carros da ${carro.marca} tem a cor ${carro.cor}`);

console.log(`Este carro tem ${carro.opcionais[0]}`);



/* Exercícios
1) Crie um novo objeto contendo informações de algo que você gosta 
(filmes, livros, comida, jogo etc) 

2) Mostre uma mensagem com pelo menos 2 propriedades do objeto
que criou.*/

let manunited = {
    nome: "Manchester United",
    jogadores: ["Onana", "Luke Shaw", "Varane", "Matinez", "Dalot", "casemiro", "Mount", "Bruno Fernandes"],
    tecnico: "Ten Hag",
    patrocinador: "team Viewer",
    campeonato: ["Premier League", "Champions League"]
};

console.log(`O ${manunited.nome} perdeu novamente na ${manunited.campeonato[1]} com uma falha do jogador ${manunited.jogadores[0]}, o técnico${manunited.tecnico} comenta sobre a derrota e diz que o foco é na ${manunited.campeonato[0]} `);


console.log(`-----------------`);

// Objeto com array e com outro objeto
let pessoa = {
    nome: "Shiryu",
    idade: 20,
    telefones: ["11-2135-0300", "11-9234-5678"],
    medida: {
        peso: 65,
        altura: 1.75
    }
};

console.log(`Nome: ${pessoa.nome}`);
console.log(`Celular: ${pessoa.telefones[1]}`);
console.log(`Peso: ${pessoa.medida.peso}kg`);


// Array de objetos
let alunos = [
    {
        nome: "Naruto",
        idade: 10
    },
    {
        nome: "Guts",
        idade: 30
    },
    {
        nome: "Dohko",
        idade: 120
    }
];

console.log( alunos[1].nome ); // Guts
console.log( alunos[1].nome ); // Naruto

console.log(
`O cavaleiro de ouro originalmente era o ${alunos[2].nome} de Libra que tem ${alunos[2].idade}anos`);


// Array como matriz
let tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["PHP", "SQL", "APIs", "Node", "Python"],
    ["figma", "Photoshop"]
]

console.log(tecnologias[1][3]);// Node
console.log(tecnologias[2][1]);//Photoshop
console.log(tecnologias[0][0]);//HTML5

console.table(manunited);