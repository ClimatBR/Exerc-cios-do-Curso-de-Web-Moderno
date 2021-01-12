console.log(module.exports)//apresenta um objeto vazio
console.log(this === module.exports)
console.log(exports === module.exports)//ambos são extritamente iguais

this.a = 1
exports.b = 2
module.exports.c = 3
console.log(module.exports)

exports = null
console.log(module.exports)

exports = { 
    chave: 13
}
console.log(module.exports)//não se pode criar outro objeto de module.exports assim

module.exports = {
    chave: 15
}//dessa maneira funciona