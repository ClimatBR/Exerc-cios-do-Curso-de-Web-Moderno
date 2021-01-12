const nota = [1.5,10,5.5,6]
let soma = 0
for(let i in nota){
soma += nota[i]
}
let media = soma/nota.length

console.log(media)