const idades = [5,15,17,22,18,19,55,13,11,12,17]

const maioresDeIdade = idades.filter(function(idade){
   return idade>=18
})

const menores = idades.filter(function(idade){
    return idade<18
})

console.log(`A quantidade de maiores de idade é: ${maioresDeIdade.length} `)
console.log(`A quantidade de menroes de idade é: ${menores.length}`)