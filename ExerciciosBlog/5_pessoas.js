const pessoas = [
    {altura: 1.85, sexo: 'feminino'},
    {altura: 1.65, sexo: 'masculino'},
    {altura: 1.55, sexo: 'feminino'},
    {altura: 1.80, sexo: 'masculino'},
    {altura: 1.75, sexo: 'masculino'}
]

const alturas = pessoas.map(function(alturas){ return alturas.altura})
const sexos = pessoas.map(sexos => sexos.sexo)
const masculino = sexos.filter(sexos => sexos == 'masculino')
const feminino = sexos.filter(sexos => sexos == 'feminino')
const resultado = []
let novoindice = 0
let maior = 0
const maiorAltura = alturas.map(function(valor,indice){
    if(valor>=maior){
        maior = valor
        novoindice = indice
        
    }
    
})

console.log(`Quantidade de pessoas do sexo masculino: ${masculino.length}
Quantidade de pessoas do sexo feminino: ${feminino.length}
Maior altura: ${maior}
Sexos da pessoa com a maior altura: ${sexos[novoindice]}`)
