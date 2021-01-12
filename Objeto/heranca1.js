const ferrari ={
    modelo: 'F40',
    velmax: 324
}

const volvo = {
    modelo: 'v40',
    velmax: 200
}

console.log(ferrari.__proto__)//pega o "pai" de ferrari
console.log(ferrari.__proto__ === Object.prototype) //"pai" de ferrari é o object.prototype
console.log(volvo.__proto__ === Object.prototype)// tbm é pai do volvo
console.log(Object.prototype.__proto__) //ele não tem "pai". É null

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)// são duas funções
console.log(Object.prototype, MeuObjeto.prototype)//ambos são objetos
console.log(ferrari.prototype)//resulta em undefined
