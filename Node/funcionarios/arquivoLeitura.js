const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)
/* dessa forma, o event loop irá parar para executar esse processo, podendo parar em arquivos grandes.*/

//assíncrono
fs.readFile(caminho, 'utf-8',(err, conteudo)=> {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})
//o assíncrono funciona em paralelo. O Event Loop não pára para executa-lo.

const config = require('./arquivo.json')
console.log(config.db)//será executada antes do assícrono, pois este ficou preso á um callback.

fs.readdir(__dirname,(err,arquivos)=>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})