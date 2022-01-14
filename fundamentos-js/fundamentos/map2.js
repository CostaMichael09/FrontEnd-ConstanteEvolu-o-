const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Brahma", "preco": 3.00 }'
]

const obj = json => JSON.parse(json)
const apenasPreco = x => x.preco 

console.log(carrinho.map(obj).map(apenasPreco))