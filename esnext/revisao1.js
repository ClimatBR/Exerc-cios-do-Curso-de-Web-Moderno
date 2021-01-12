//let e const 
{
    var a = 'a'
    let b = 'b'
    console.log(b)
}

console.log(a)

//template String
const produto = 'iPad'
console.log(`O produto é
 um 
 ${produto}`)

 //Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l,e,tras)//tras aparece como um array

const [x,y] = [1, 2, 3]
console.log(x,y)

const {idade:i, nome} = {nome: 'Maria', idade: 21}
console.log(i,nome)