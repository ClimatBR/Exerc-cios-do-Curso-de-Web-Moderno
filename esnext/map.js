const tecnologia = new Map()
tecnologia.set('react', {framework: false})
tecnologia.set('angular', {framework: true})
console.log(tecnologia.react)//undefined
console.log(tecnologia.get('react').framework)

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl,ch) => {
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')//vai sobreescrever
chavesVariadas.set(456,'a') //pode repetir o valor, mas não a chave
console.log(chavesVariadas)
