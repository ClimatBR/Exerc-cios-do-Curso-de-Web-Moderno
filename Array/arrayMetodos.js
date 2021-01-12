const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()// tira o último elemento
console.log(pilotos)

pilotos.push('Verstappen')//acrescenta elemento
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')//acrescenta como primeiro elemento
console.log(pilotos)

//splice pode adicionar ou remover
//adicionar
pilotos.splice(2,0,'Bottas','Massa')//apenas acrescentou esses dois no indice 2 em diante
console.log(pilotos)

//remover
pilotos.splice(3,1)//remove um elemento a partir do indice 3
console.log(pilotos)

//slice serve para criar um novo array com base em outro

const algunsPilotos = pilotos.slice(2)//pega todos os elementos a partir do indice 2, considerando ele
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)//pega todos os elementos a partir do indice 1 até o 4, mas sem considerar o 4
console.log(algunsPilotos2) 