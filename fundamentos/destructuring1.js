const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua legal',
        numero: 123

    }
}

const{nome,idade} = pessoa
console.log(nome,idade)

const{nome:n,idade:i} = pessoa
console.log(n,i)

const{endereco:{logadouro,numero,cep}} = pessoa
console.log(logadouro,numero,cep)
//cep dá undefined por ser o unico que nao existem no objeto endereco

//const{conta:{ag,num}} = pessoa
//console.log(ag,num)
/*o código acima dá erro, pois não se pode escrever um componente 
indefinido de um objeto indefinido.*/
