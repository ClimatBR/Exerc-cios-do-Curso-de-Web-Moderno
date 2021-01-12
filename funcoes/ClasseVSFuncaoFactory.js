class Pessoa{
 constructor(nome){
     this.nome = nome // coloca a variavel no escopo global
 }
 falar(){
     console.log(`Meu nome é ${this.nome}`)}
}

const p1 = new Pessoa('Victor')
p1.falar()
new Pessoa("Salvador").falar()
//Function Factory

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Hugo')
p2.falar()
criarPessoa('Nogueira').falar()
