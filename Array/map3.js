Array.prototype.map2 = function (callback){
    const arraynovo = []
    for (let i = 0; i < this.length; i++){
        arraynovo.push(callback(this[i],i,this))
    }
    return arraynovo
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os precos
const paraObjeto = json => JSON.parse(json)//transforma em objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)