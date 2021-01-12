function Pessoa(nome){
        this.nome = nome // coloca a variavel no escopo global
    
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)}
   }
   
   const p1 = new Pessoa('Victor')
   p1.falar()