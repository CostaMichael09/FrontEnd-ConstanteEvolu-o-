function Pessoa(nome){
    

    try{
        return nome.toUpperCase()
    } catch {
        throw new console.error('Error relatado com sucesso!');
    }
        
}
Homem = {nome: 'Michael'}

console.log(Pessoa(Homem.nome))

