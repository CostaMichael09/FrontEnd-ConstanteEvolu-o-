function Aprovacao(nota){
    switch(nota){
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: {
            console.log('Aluno reprovado')
            break
        }

        case 7: case 8: case 9: case 10: {
            console.log('Aluno aprovado!')
            break
        }
        default:{
            console.log('Invalido')
        }
    }
}
console.log(Aprovacao(5))