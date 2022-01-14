const pai ={
    nome : `PSK1`,
    sobrenome : `Liquid`,
    etnia : `pardo`
}

const filha = { __proto__ : pai, nome : 'Julia'}
//console.log(filha.sobrenome)
for(let key in filha){
    filha.hasOwnProperty(key) ?
    console.log(key) : console.log(`por herança ${key}`)
}

const filha2 = Object.create(pai, { nome: {value : 'Marcela' }})
console.log(`Meu nome é ${filha2.nome}.
Meu sobrenome é ${filha2.sobrenome} e minha etnia é ${filha2.etnia}`)