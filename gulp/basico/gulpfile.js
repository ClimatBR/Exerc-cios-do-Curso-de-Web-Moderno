const gulp = require('gulp')
const { series, parallel } = require('gulp')
//const series = gulp.series

function antes1(callback){
    console.log('Tarefa de Antes1!')
    return callback()
}
function antes2(callback){
    console.log('Tarefa de Antes2!')
    return callback()
}
function copiar(callback){
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    .pipe(gulp.dest('pastaB'))
    return callback()
}
function fim(callback){
    console.log('Tarefa de FIM!')
    return callback()
}

module.exports.default = series(
    parallel( antes1, antes2),
    copiar,
    fim,
    )