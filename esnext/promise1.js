const primeiroElemento = e => e[0]
const letraMinuscula = l => l.toLowerCase()

let p = new Promise(function(resolve){
    resolve(['Ana','Bia', 'Carlo', 'Daniel'])
})

p.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
//.then(v => console.log(v))
.then(console.log)