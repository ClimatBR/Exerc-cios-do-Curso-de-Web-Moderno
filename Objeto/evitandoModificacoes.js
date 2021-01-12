//Object.preventExtensions -> objeto não recebe novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',preco:1.99,tag:'promoção'
})

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'//ignorado
delete produto.tag
console.log(produto)

//Object.seal ->impede de deletar e adicionar novos atributos
const pessoa = {nome:'Julinana',idade:35}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29 //apenas esse será executado
console.log(pessoa)

//Object.freeze = selado + valores constantes