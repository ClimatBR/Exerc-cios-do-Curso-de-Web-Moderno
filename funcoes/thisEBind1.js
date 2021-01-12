const pessoa = { 
   saudacao: 'Bom dia',
   falar(){
       console.log(this.saudacao)
   }
}
pessoa.falar()
console.log(pessoa.saudacao)

const falar = pessoa.falar
falar()// o this é de falar, não de pessoa, portanto o saudacao da undefined
// conflito de paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
//o bind obriga o this a ser pessoa
falarDePessoa()
