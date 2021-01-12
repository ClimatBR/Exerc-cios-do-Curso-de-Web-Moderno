require('./global')//não precisa da constante.

console.log(minhaApp.saudacao()) //consegue acessar no próprio global.

minhaApp.nome = 'Ana'

console.log(minhaApp.nome)

