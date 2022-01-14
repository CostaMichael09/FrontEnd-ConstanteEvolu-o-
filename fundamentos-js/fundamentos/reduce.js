notas = [1,2,3,4,5]

const resultado = notas.map(a => a * 3).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual

}, 0)
console.log(resultado)

