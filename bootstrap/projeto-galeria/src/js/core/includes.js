import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    //aqui pegamos apenas a tag com o wm-include e fazemos algo
    $(parent).find('[wm-include]').each(function(i, e){
        //aqui pegamos a referencia que está no atributo
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            //aqui se verifica se é um sucesso ler os dados da referencia
            success(data) {
                //coloca os dados da referencia no html
                $(e).html(data)
                //remove o atributo para o processo nao ser repetido
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data))

                //aplica a função nas tags dentro da tag atual
                loadIncludes(e)
            }
        })
    })
}

//vai começar pegando o body
loadIncludes()