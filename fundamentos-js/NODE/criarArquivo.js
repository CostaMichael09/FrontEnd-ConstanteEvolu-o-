const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 2500,
    descricao: 'Iphone 8'
}


fs.writeFile(__dirname + 'newfile.json', JSON.stringify(produto), err => {
    console.log(err || 'Salvo!')
})