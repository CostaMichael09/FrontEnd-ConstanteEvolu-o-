//Pode excluir, porem nao pode adicionar

const produto = Object.preventExtensions({
    nome :'qualquer'
})

// So pode modificar o objeto
const pessoa ={ nome :'mchael', idade :20}
Object.seal(pessoa)