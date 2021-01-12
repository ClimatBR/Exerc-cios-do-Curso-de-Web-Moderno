const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}//puxa o string do escopo global para valor

function exec(){
 const valor = 'Local'
 minhaFuncao()
}// a ideia que passa é que minhaFuncao vai pegar o valor de dentro de exec

exec()
/* O que ocorre é diferente do esperado, é escrito "Global" na vdd.
Isso acontece porque o JS sabe aonde suas funçoes foram escritas, sob 
quais contextos. Independente de ter um valor dentro de exec, 
o valor dentro da função minhaFuncao é o do escopo global.*/