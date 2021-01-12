const funcs = [] //array vazio

for(var i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]() //vão imprimir 10, por utilizar um var