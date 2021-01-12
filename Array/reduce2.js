const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 6.5, bolsista: true},
    {nome: 'Sarah', nota: 8.6, bolsista: true},
    {nome: 'Paulo', nota: 4.5, bolsista: false}
]


//Desafio 1: Todos os alunos são bolsistas?

const apenasBolsista = alunos.map(a => a.bolsista)
let valor = 0
const resultado = apenasBolsista.reduce(function(acumulador,atual){
    return valor = acumulador * atual

})
if (valor == 0){
    console.log('Nem todos os alunos recebem bolsa')
}
else{
    console.log('Todos os alunos recebem bolsa')
}



//Desafio 2: Algum aluno é bolsista?

const resultado2 = apenasBolsista.reduce(function(acumulador,atual){
 return valor = acumulador + atual
})
if (valor == 0){
    console.log('Nenhum aluno recebe bolsa')
}
else {
    console.log('Há alunos com bolsas')
}


// versão do professor:

// 1
const todosBolsistas = function (resultado,bolsista){ return resultado && bolsista}
const resolucao = apenasBolsista.reduce(todosBolsistas)
console.log(resolucao)

//2
const algumBolsista = (resultado,bolsista) => resultado||bolsista
const resolucao2 = apenasBolsista.reduce(algumBolsista)
console.log(resolucao2)