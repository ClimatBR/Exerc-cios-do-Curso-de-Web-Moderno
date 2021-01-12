const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response => {
    const funcionarios = response.data
    const generoF = funcionaria => funcionaria.genero == 'F'
    const pais = funcionaria => funcionaria.pais == 'China'
    const filtro = funcionarios.filter(generoF).filter(pais)
    let salarioatual 
    let i = 0
    const salario = function (funcionaria,funcionariaAtual,indice){
        if(funcionaria.salario>funcionariaAtual.salario){
        i = indice

        }
        return filtro[i]
        
    } 
    /* const salario = function (func,funcAtual) {
        return func.salario > funcAtual.salario ? funcAtual : func*/
    console.log(filtro.reduce(salario)) 
})