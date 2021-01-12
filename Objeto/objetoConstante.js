// pessoa ---> 123 ---> {...}
//um objeto constante na vdd aponta para um endereço
//os valores internos do objeto variam
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa) // nome alterado de joao para pedro

//pessoa ---> 456 ---> {...}
//criar um novo endreço para pessoa resulta em um erro
// pessoa = {nome: 'Maria'} ---> resulta em erro

Object.freeze(pessoa)//faz com que os dados do objeto sejam imutáveis

pessoa.nome = 'Ana'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)// nada foi mudado por causa do freeze

const pessoaConstante = Object.freeze({nome: 'Joao'}) // imutável
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)