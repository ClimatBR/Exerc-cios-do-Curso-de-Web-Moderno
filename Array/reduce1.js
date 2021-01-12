const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 6.5, bolsista: true},
    {nome: 'Sarah', nota: 8.6, bolsista: true},
    {nome: 'Paulo', nota: 4.5, bolsista: false}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},0)

console.log(resultado)

//O reduce serve para aplicar operaçoes em cadeia entre os valores dentro do array
