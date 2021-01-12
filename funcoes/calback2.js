const  notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//sem callback
let notasBaixas = []
for(i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])// acrescenta o valor no array
    }
}

console.log(notasBaixas)

//Com Callback

notasBaixas2 = notas.filter(function(nota){ return nota < 7})
console.log(notasBaixas2)

notasAltas = notas.filter(nota => nota>7)
console.log(notasAltas)

