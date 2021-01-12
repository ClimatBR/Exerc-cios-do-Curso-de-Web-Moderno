console.log(soma(3,4))//posso chamar antes do bloco da function declaration

//function declaration
function soma(x,y){
    return x + y
}

//function expression
const sub = function(x,y){
    return x - y
}
console.log(sub(3,4))//não pode ser chamada antes do bloco

//named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3,4))