//Sempre que coloco cliente, dá a entender que utilizo um arquivo para importar arquivos

const moduloA = require('./moduloA')// o ponto e contrabarra servem para pegar o arquivo nesse sistema
// se fosse em armazenado em um sistema de terceiros, não seria necessario
const moduloB = require('./moduloB')
//outra observação é que não precisamos escrever a extensão '.js', pois o node já "imagina" que seja JS

console.log(moduloA.bemvindo)
console.log(moduloA.ola)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.boanoite)
console.log(moduloB.bomdia)
console.log(moduloB)