let valor // não inicializado (indefinido)
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // vai dar erro, pois não se manipula null

const produto = {}
console.log(produto)
console.log(produto.preco) // undefined
console.log(produto)
produto.preco = undefined //evitar atribuir como undefined
console.log(!!produto.preco)
console.log(produto)


