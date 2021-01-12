const fabricantes = ['Mercedes', 'Audi','BMW']

function imprimir(nome,indice){
    console.log(`${indice + 1}.${nome}`)
}

fabricantes.forEach(imprimir)
/*forEach faz com que cada parametro assuma sucessivamente
nome,indice e array*/
fabricantes.forEach(fabricante => console.log(fabricante))
/*o forEach permite que coloquemos uma função com nome
totalmente novo para acessar apenas os nomes dentro do arry.*/