function compras (trabalho1,trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv51 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // igual ao oposto de comprar sorvete
    return {comprarSorvete,comprarTv51,comprarTv32,manterSaudavel} 
    // para retornar mais de um valor, fazer um objeto

}
console.log('01) ',compras(true,true))
console.log('02) ',compras(true,false))
console.log('03) ',compras(false,true))
console.log('04) ',compras(false,false))


 
