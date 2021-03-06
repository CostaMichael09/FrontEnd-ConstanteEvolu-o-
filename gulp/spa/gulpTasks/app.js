const gulp = require('gulp')
const babel = require('gulp-babel')
const uglyfly = require('gulp-uglify')
const sass = require('gulp-sass')
const uglyflycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML(cb) {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace : true}))
        .pipe(gulp.dest("build"))
}

function appCSS(cb) {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglyflycss({"uglyComments": true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest("build/assets/css"))
}

function appJS(cb) {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({presets: ['ENV']}))
        .pipe(uglyfly())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG(cb) {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}