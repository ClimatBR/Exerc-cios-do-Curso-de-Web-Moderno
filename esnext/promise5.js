function funcionarOuNao(valor,chanceErro){
    return new Promise ((resolve,reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro')
        }
        else{
            resolve(valor)
        }
    })
}

funcionarOuNao('testando...', 0.5)
.then(v => `valor: ${v}`)
.then(v => console.log(v), err => console.log(`ERRO: ${err}`))
.then(() => console.log('Quase Fim'))
.catch(err => console.log(`Errou: ${err}`))
.then(() => console.log('Fim'))