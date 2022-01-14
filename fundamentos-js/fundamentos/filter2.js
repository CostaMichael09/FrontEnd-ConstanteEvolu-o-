//Criando o proprio Array

Array.prototype.filter2 = function(callback){
    const newArray = []
    for ( let i = 0;i < this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const pessoas = [
    {nome: 'Michael', Status: true},
    {nome: 'Mariana', Status: false}
]

const s = x => x.Status

console.log(pessoas.filter2(s))