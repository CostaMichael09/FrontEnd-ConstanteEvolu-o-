function AprovarReprovar(n1,n2,nome){
    if( ((n1 + n2) / 2) < 7){
        console.log("Aluno "+nome+" está reprovado")
    } else {
        console.log('O aluno está aprovado!')
    }
}
const pessoa = {
    nome : 'Michael'
}

console.log(AprovarReprovar(6,6,pessoa.nome))

