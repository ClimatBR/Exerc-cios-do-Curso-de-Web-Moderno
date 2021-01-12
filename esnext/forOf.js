for (let letra of 'Cod3r'){
    console.log(letra)
}

const assuntoEcma = ['Map','Set','Promise']

for(let assunto of assuntoEcma){
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map',{abordado: true}],
    ['Set',{abordado: true}],
    ['Promise',{abordado: false}]
])

for(let assunto of assuntoMap.keys()){
    console.log(assunto)
}

for(let assunto of assuntoMap.values()){
    console.log(assunto)
}

for(let [ch, vl] of assuntoMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}