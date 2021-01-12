const imprimirResultado = function(num){
    if(num>=7){
        console.log('Aprovado, moleque bom¹')
    }
    else{
        console.log('Reprovado. Precisa criar vergonha e estudar!')
    }
}

imprimirResultado(10)
imprimirResultado(3)
imprimirResultado('OLOKINHO MEU')// linguagem fracamente tipada... nesse caso, detalhar o else!