const carro ={
    velAtual : 0,
    velMax : 250,
    acelerarmais(x){
        if (this.velAtual + x <= this.velMax){
            this.velAtual += x
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return this.velAtual +' de '+this.velMax
    }
}

const fiat ={
    modelo : 'Uno',
    //velAtual : 120,
    status(){
        return this.modelo + ' : ' + super.status()
    }
}
Object.setPrototypeOf(fiat, carro)
fiat.acelerarmais(100)
fiat.acelerarmais(200)
console.log(fiat.status())



