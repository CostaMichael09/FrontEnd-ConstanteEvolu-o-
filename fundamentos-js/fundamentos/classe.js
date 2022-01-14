class avo {
    constructor(sobrenome = 'Silva',etnia = 'pardo'){
        this.sobrenome = sobrenome
        this.etnia = etnia
    }
}

class pai extends avo{
    constructor(){
        super(avo)
    }
}

class filho extends pai{
    constructor(nome){
        super(pai)
        this.nome = nome
    
    }
}
const x = new filho
const y = new avo
x.sobrenome = 'Costa'
console.log(x)
console.log(y)