function soBoaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(7.8)
soBoaNoticia(6.1)

function seForVerdadeEuImprimo(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}
 seForVerdadeEuImprimo()
 seForVerdadeEuImprimo('')
 seForVerdadeEuImprimo(undefined)
 seForVerdadeEuImprimo(null)
 seForVerdadeEuImprimo(NaN)
 seForVerdadeEuImprimo(0)
 seForVerdadeEuImprimo(-1)
 seForVerdadeEuImprimo(' ')
 seForVerdadeEuImprimo([])
 seForVerdadeEuImprimo({})
 seForVerdadeEuImprimo('?')
 seForVerdadeEuImprimo([1,2])
 