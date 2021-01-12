const funcs = [] //array vazio

for(let i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]() //vão imprimir 2 e 8, por utilizar um let