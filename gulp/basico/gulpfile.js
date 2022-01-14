const gulp = require('gulp')
const series = gulp.series

const antes1 = cb => { 
    console.log('tarefa antes 1')
    return cb()
}


function antes2(cb){
    console.log('Tarefa antes 2')
    return cb()
}

function copiar(cb){
    gulp.src(['pastaA/arquivo1.txt', 
        'pastaA/arquivo2.txt'])
            .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb =>{
    console.log('Fim!')
    return cb()
}
module.exports.default = series(copiar,antes1, antes2, fim)