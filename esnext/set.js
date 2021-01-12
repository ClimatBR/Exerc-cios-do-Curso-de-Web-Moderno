//não aceita repetição/ não aceita indexamento (índices)

const times = new Set()
times.add('Vasco')
times.add('Palmeiras').add('Flamengo')
times.add('Vasco')//ignorado

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')

const nomes = ['Raquel','Julio','Ana','Julio']
const nomesSet = new Set(nomes)
console.log(nomesSet)//apenas um Julio contabilizado.