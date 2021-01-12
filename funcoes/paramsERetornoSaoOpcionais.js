function area(largura,altura){
    const area = largura * altura
    if(area > 20){
        console.log(`valor inválido: ${area}m2`)
    }
    else{
        return area
    }
}

console.log(area(2,2)) // retorna
console.log(area(2))// NaN
console.log(area())// NaN
console.log(area(2,2,3,4,10,111111))// retorna ignorando os parametros excedentes
console.log(area(5,5)) // não retorna. undefined
area(5,5)// não pediu para retornar