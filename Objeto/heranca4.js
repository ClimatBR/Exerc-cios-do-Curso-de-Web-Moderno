function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}//preciso do this por se tratar de  uma função dentro de um objeto
//pegando um atributo da função

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //cria herança

obj3.nome = 'Obj3'
obj3.falar()

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
//O prototipo do objeto MeuObjeto é o MeuObjeto.prototype
console.log(MeuObjeto.__proto__ === Function.prototype)
//O protótipo da função MeuObjeto é Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype)
//O protótipo de Function.prototype é Objecto.prototype
console.log(Object.prototype.__proto__ === null)
//O protótipo de Objecto.prototype.__proto__ é nulo
