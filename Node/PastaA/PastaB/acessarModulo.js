const moduloA = require('../../moduloA')
console.log(moduloA)

const c = require('./pastaC/index')
console.log(c.oi)

const http = require('http')
http.createServer((req,res)=> {
    res.write('Fica melhor, Chris S2')
    res.end()
}).listen(8080)