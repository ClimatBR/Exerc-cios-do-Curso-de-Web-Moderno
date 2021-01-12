const notas = [6.6,7.8,8.5,4.5,9.9] //array

for(let i in notas){
    console.log(i, notas[i])// existem métodos melhores
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 21,
    peso: 64
}

for(let atributo in pessoa){
    //console.log(atributo + ' = ' + pessoa[atributo])
    console.log(`${atributo} = ${pessoa[atributo]}`)
}// método muito útil para objetos!!!
