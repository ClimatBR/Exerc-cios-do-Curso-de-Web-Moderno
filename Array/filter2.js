Array.prototype.filter2 = function(callback){
    const novoarray = []
    for(let i = 0; i< this.length; i++){
        if(callback(this[i],i,this) == true){
        novoarray.push(this[i])
        }
    }
    return novoarray
}

const produtos = [
    {nome: 'Notebook', preco: 2199.00, fragil: true},
    {nome: 'Ipod', preco: 4199.99, fragil: true},
    {nome: 'Copo de vidro', preco: 19.99, fragil: true},
    {nome: 'Copo de plástico', preco: 5.99, fragil:true}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter2(caro).filter2(fragil))
