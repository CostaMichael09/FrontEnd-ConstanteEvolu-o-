const nums = [1,2,3]

let resultado = nums.map(function(x){
    return x * 3
})

//console.log(resultado, nums)

const soma = x => x + 5;
const Real = x => `R$ ${parseFloat(x).toFixed(2).replace('.',',')}`;
resultado = nums.map(x => x+10).map(Real)

console.log(resultado)

resultado = nums.map( x => x * 2);

console.log(resultado)