const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { appCSS, appHTML, appIMG, appJS } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { servidor, monitorarArquivos } = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
        servidor,
        monitorarArquivos
    
)