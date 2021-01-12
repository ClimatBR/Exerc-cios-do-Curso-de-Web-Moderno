function getPreco(imposto = 0, moeda= 'R$'){
    return `${this.nome}: ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const Produto = {
    nome: 'Notebook',
    preco: 4890.00,
    desc: 0.15,
    getPreco
}//função chamada pelo objeto

global.nome = 'Xarope'
global.preco = 20
global.desc = 0.1
console.log(getPreco())
//função chamada apenas pelo contexto global

console.log(Produto.getPreco())//função no objeto

//Utilizando Call e Apply:

const Carro = {nome: 'Gol', preco: 25000, desc: 0.15}
//novo objeto de exemplo, sem função nele
console.log(getPreco.call(Carro))//call chama a função no contexto do objeto
console.log(getPreco.apply(Carro))//apply também chama a função no contexto do objeto

//a diferença entre o call e o apply está em sua forma de escrever

console.log(getPreco.call(global,0.1,'$'))//call define o contexto e os parâmetros da função,todos separados por vírgulas
console.log(getPreco.apply(global,[0.5,'$$']))//apply faz a mesma coisa, porém os parâmetros devem estar em um array
