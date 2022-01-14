const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(cb){
    tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
    return cb()
}

module.exports.default = series(transformacaoTS)