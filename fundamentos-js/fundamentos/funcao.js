

const imprimirsoma = function(a,b){
    console.log(a + b)
}

const retornarsoma = function(a,b, op = soma){
    console.log(op(a,b))
}



retornarsoma(7,5, function(x,y){return x - y})

