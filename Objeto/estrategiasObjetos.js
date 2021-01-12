//Notação Literal:
const obj1 = {}

//Objeto em JS
console.log(typeof Object, typeof new Object)
/* antes era uma função,com o new,virou objeto.*/
const obj2 = new Object
console.log(obj2)

//Função Construtora
function Produto(nome,preco,desc){
    this.nome = nome // torna visível no escopo global.
    this.getPrecoComDesconto = () =>{
        return preco * (1-desc) // não pode ser mudado no escopo global
    }
}

const p1 = new Produto('Caneta',7.99, 0.15)
const p2 = new Produto('Notebook', 2898.99, 0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())
console.log(p1,p2) // aparece como uma funçao normal, porem não mostra os atributos dentro de getPrecoComDesconto
console.log(p1.nome)
console.log(p2.preco)// undefined, pois esta dentro da função

//Função Factory ---> colocar um objeto direto dentro da funçao

function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase/30)*(30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7809.99,4)
const f2 = criarFuncionario('Maria',11400,1)
console.log(f1.getSalario(),f2.getSalario())//escreveu apenas o getsalario
console.log(f1,f2)// retorna como objeto normal, porem sem discriminar a função interna

//Object.create ----> Aprenderei mais ainda
//tem relação com herança
const filha = Object.create(null) // vou entender ainda
filha.nome = 'Ana'
console.log(filha)

//JSON ----> Uma função famosa que retorna Objeto...

const fromJSON = JSON.parse('{"info": "SOU UM JSON"}')
console.log(fromJSON.info)