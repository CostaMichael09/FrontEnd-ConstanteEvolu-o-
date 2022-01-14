const produtos = [ 
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Mouse', preco: 50, fragil: true},
    {nome: 'Carregaor', preco: 15, fragil: false}
]

const caro = x => x.preco > 500
const fragil = x => x.fragil == false

console.log(produtos.filter(fragil))
