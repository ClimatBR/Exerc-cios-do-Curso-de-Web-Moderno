const array = ['10,122,5024,405,3123']

const novoarray = array[0].split(',')
let maiorvalor = novoarray[0]
for(let i in novoarray){
if(novoarray[i]>maiorvalor){
    maiorvalor = novoarray[i]
}
}

console.log(maiorvalor)