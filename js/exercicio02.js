let alunos = [
    {
        nome: "Joãozinho",
        id: 1
    },
    {
        nome: "Mariazinha",
        id: 2
    },
    {
        nome: "Giuseppezinho",
        id: 3
    }
];

let quantidadealunos = alunos.length;

for ( let i = 0; i < quantidadealunos; i++ ){
    console.log(alunos[i].nome);
}