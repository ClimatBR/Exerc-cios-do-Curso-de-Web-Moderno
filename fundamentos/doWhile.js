function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return(Math.floor(valor))
}

let opcao = -1/* nesse caso, pode colocar como -1, pois ele executa 
depois que checa a situação*/

do{
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log('Opção escolhida foi ' + opcao )
} while(opcao != -1)
console.log('FIM')