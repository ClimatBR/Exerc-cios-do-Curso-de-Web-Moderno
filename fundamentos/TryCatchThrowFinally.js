function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e){
        TratarErroELancar(e)
    }
    finally{
        console.log('Final')
    }
    }

function TratarErroELancar(erro){
//throw new Error('...')
//throw 10
//throw true
//throw 'string'
throw{
    nome: erro.nome,
    msg: erro.mensagem,
    date: erro.date
}}
const obj = {nome:'Roberto'}// o erro está em nome não ser name!
imprimirNomeGritando(obj)