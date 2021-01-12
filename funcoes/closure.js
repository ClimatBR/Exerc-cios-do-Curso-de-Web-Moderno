// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite à função acessar e manipular variáveis externas a função

//Contexto Léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())//irá escrever "Local", por causa do contexto léxico da função dentro

//se não quiser colocar a função em uma constante, basta por 2 parenteses.
// fora()()