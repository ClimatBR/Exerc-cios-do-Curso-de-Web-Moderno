const produtos = [
    {nome: 'Notebook', preco: 2199.00, fragil: true},
    {nome: 'Ipod', preco: 4199.99, fragil: true},
    {nome: 'Copo de vidro', preco: 19.99, fragil: true},
    {nome: 'Copo de plástico', preco: 5.99, fragil:true}
]

console.log(produtos.filter(function(p){
    return produtos
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter(caro).filter(fragil))
