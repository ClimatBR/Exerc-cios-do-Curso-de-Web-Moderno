// função sem retorno
function imprimirSoma(a,b){
console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma()
imprimirSoma(2,11,1,3,5,6,10)

//função com retorno
function soma(a,b=1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())
