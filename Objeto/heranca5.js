console.log(typeof Array)
console.log(typeof String)
console.log(typeof Object)//tudo função

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}//escreve o string de trás para frente
//reverse só existia para array, mas passa a existir para string

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c','d','e'].first())

String.prototype.toString = function(){
    return 'Lascou Tudo'
}//NÃO FAZER ESSA DOIDEIRA
//ISSO ALTERA A LINGUAGEM DE PROGRAMÇÃO

console.log('Escola Cod3r'.reverse())