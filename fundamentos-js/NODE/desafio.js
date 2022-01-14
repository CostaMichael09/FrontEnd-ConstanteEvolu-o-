const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//axios.get(url).then(response => {
//    const funcionarios = response.data
//    console.log(funcionarios)
//})

const mulherchinesa = x => x.genero == 'M' && x.pais == 'Brazil'
const menorSal = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
} 


axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(mulherchinesa).reduce(menorSal))
})