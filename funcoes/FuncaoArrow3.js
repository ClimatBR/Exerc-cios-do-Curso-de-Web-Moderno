let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)//this e global são as mesmas coisa

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)// mudou o this
comparaComThis(obj)// this agr se refere ao obj

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)// em um arrow o this é diferente
comparaComThisArrow(module.exports)//comprovando que o this é outro

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global)//ele não muda nem com o bind
comparaComThisArrow(module.exports)//this do arrow é imutável