{{{{var sera = 'será?!'
     console.log(sera)}}}}
     console.log(sera) // consegue acessar a variável mesmo fora do bloco

     function  teste(){
         var local = 123
         console.log(local)
     }
teste() //consegue acessar a variável por chamar a função

// console.log(local) // ocorre um erro, pois tenta chamar uma variável que só existe dentro da função
