const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const concat = require('gulp-concat')

function transformarTS(){
    return tsProject.src()
    .pipe(tsProject())
    .pipe(concat('arquivoEmJS.js'))
    .pipe(gulp.dest('build'))
}

exports.default = series(transformarTS)