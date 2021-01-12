const saudacao = 'Opa!' //contexto léxico 1

function exec() {
    const saudacao = "Epa!" //contexto léxico 2
    return saudacao
}

const cliente = {
    nome: 'Victor',
    idade:  21,
    peso:  65,
    endereco: {
        rua:  "das irmãs gêmeas",
        numero: 40
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)