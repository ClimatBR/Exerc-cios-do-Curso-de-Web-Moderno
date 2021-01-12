const alunos = [
    {nome: 'Victor', nota: 9.5},
    {nome: 'Sarah', nota: 8.5}
]

//Imperativo:
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//Declarativo:
const getNota = aluno => aluno.nota
const soma = (nota1,notaseguinte) => nota1 + notaseguinte
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)