let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // module.exports é o mesmo que this!
console.log(module.exports)

abc = 3 // Jamais fazer isso. Variável louca sem var ou let.

console.log(global.abc)
