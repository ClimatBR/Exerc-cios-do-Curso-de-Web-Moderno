let numero = 1
{
  let numero = 2
  console.log(numero)
}
console.log(numero)
/* Como o let utiliza blocos diferentes como escopos diferentes,
podemos verificar que foi impresso 2 e 1 no console, algo que não 
aconteceria em uma var, pois esta so considera outros escopos como
função ou global.*/