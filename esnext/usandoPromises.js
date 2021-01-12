//com promise

const http = require('http') //biblioteca 


const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise ((resolve,reject) => {
        http.get(url,res => {
            let resultado = ''
            res.on('data', dados =>{
                resultado += dados
            })
        res.on('end',() =>{
            try{
            resolve(JSON.parse(resultado))
        }catch(e){
            reject(e)
        }
          }) 
        })    
 }
    )}

/*let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma(`C`).then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})*/

Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
.then(turmas => [].concat(...turmas))// espalha os objetos dos arrays em um único array
.then(alunos => alunos.map(alunos => alunos.nome))
.then(nome => console.log(nome))
.catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))