//operador ...Spread(espalhar)/Rest(juntar)

//operador Rest já foi visto

//operador Spread em objeto:
const funcionario = {nome: 'Maria', salario:12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//operador como Array
const grupoA = ['Joao', 'Ana', 'Maria']
const grupoFinal = ['Gloria', ...grupoA, 'Rafaela']
console.log(grupoFinal)