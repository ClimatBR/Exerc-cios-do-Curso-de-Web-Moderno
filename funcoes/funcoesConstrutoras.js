function Carro(velocidadeMaxima = 200, delta = 5){

    // método privado
    let velocidadeAtual = 0 //existe apenas dentro da função
    
    // método público ---> o this põem em escopo global
    this.acelerar = function(){
        if(velocidadeAtual + delta <=velocidadeMaxima){
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    
    //método público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }    
}

const uno = new Carro() //uno é um objeto criado pela função carro
uno.acelerar()//soma delta à velocidadeAtual
uno.acelerar()//soma delta à velocidadeAtual novamente
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350,20)
ferrari.acelerar()// soma de 20 em 20
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())