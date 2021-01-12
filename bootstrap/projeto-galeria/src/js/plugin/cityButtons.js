import $ from 'jquery'

import  { onLoadHtmlSuccess } from '../core/includes'

const duration = 300;

function filterByCity(city) {
    //pegar as tags com o atributo personalizado e trabalhar seus elementos
    $('[wm-city]').each(function(i,e){
        //verificar a referência do atributo
        //Se for igual ao parâmetro da função, verdeiro
        //se não tiver parâmetro, verdeiro
        const isTarget = $(this).attr('wm-city') === city ||
        city === null
        // mostrar se for verdadeiro e esconder, se for falso
        if(isTarget){
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else{
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}


$.fn.cityButtons = function () {
const cities = new Set
$('[wm-city]').each(function(i,e){
    cities.add($(e).attr('wm-city'))
})

const btns = Array.from(cities).map(city => {
    const btn = $('<button>')
     .addClass(['btn', 'btn-info']).html(city)
    btn.click( e => filterByCity(city))
    return btn
})

const btnAll = $('<button>')
    .addClass(['btn', 'btn-info', 'active']).html('Todas')
btnAll.click(filterByCity(null))
btns.push(btnAll)

const btnGroup = $('<div>').addClass(['btn-group'])
btnGroup.append(btns)

$(this).html(btnGroup)
return this
}

onLoadHtmlSuccess(function() {
    $('[wm-city-buttons]').cityButtons()
})
