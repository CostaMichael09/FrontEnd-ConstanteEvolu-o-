escola = [{
    nome: 'Turma 855',
    alunos: [{
        nome: 'Michael',
        nota: 10
    }, {
        nome: 'Mariana',
        nota: 9
    }]
},{
    nome: 'Turma 856',
    alunos:[{
        nome: 'Ana',
        nota: 7
    },{
        nome: 'Messi',
        nota: 5
    }]    
}]

const getNome = aluno => aluno.nome
const getNomeAluno = x => x.alunos.map(getNome)

console.log(escola.map(getNomeAluno))

Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

console.log(escola.flatmap(getNomeAluno))