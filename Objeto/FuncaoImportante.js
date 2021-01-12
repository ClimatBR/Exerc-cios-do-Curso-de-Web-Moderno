const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//escreve apenas as chaves
console.log(Object.values(pessoa))//escreve apenas os valores 
console.log(Object.entries(pessoa))//escreve chaves e valores em arrays dentro de um array

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,//permite ser listado
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'//será ignorado
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))//como tá truen,mostrara dataNasc.

//Object.assign (ECMAScript 2015)

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3,a:4}
const obj = Object.assign(dest,o1,o2)//concatena e substitui valores repetidos

Object.freeze(obj)//impede modificações posteriores
obj.c = 1234 //ignorado
console.log(obj)