function produto(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(produto('Notebook',2199,59))
console.log(produto('iPod',1199,59))


function produto2(nome,preco,desconto = 0.1){
    return{
        nome,
        preco,
        desconto,
    }
}

console.log(produto2('Carro',21000.00))





