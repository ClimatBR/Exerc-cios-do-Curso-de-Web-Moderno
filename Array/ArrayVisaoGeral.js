console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
//essa foi outra forma de criar um array

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[3])//undefined

aprovados[3] = 'Paulo'//mais usado para substituir
aprovados.push('Abia')//melhor forma de add
console.log(aprovados.length)

aprovados[9]='Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)//4 elementos vazios

aprovados.sort()//reorganiza em ordem alfabética
console.log(aprovados)

delete aprovados[1]//apaga o elemento, mas não reoganiza o array
console.log(aprovados[2])
console.log(aprovados[1])

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,1,'elemento1','elemento2')
//serve para acrescentar,deletar e regornaizar os elementos do array
console.log(aprovados)
