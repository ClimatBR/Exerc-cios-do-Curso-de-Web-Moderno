const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglifyCss= require('gulp-uglifycss')
const sass = require('gulp-sass')

function transformarSASS() {
    return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifyCss({"uglifyComments": true}))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

function copiarHTML(){
    return gulp.src('src/index.html')
    .pipe(gulp.dest('build/'))
}

exports.default = series(transformarSASS, copiarHTML)