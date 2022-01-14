function newElement(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
} 

function barreira(reversa = false){
    this.elemento = newElement('div', 'barreira')

    const borda = newElement('div', 'borda')
    const corpo = newElement('div', 'corpo')
    
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

function ParDeBarreiras(altura, abertura, x){
    this.elemento = newElement('div', 'par-de-barreiras')

    this.superior = new barreira(true)
    this.inferior = new barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`   
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

function Barreiras(altura, largura, abertura, espaco, notificar){
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]
    
    let deslocamento = 3

    
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)
            
            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }
            
            const meio = largura / 2
            const cruzou = par.getX() + deslocamento >= meio && par.getX() < meio
            if(cruzou) notificar()
            
            
        })
    }
}

function Passaro(altura){
    let voando = false
    
    this.elemento = newElement('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'
    
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`
    
    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false
    
    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = altura - this.elemento.clientHeight
        
        if(novoY <= 0){
            this.setY(0)
        } else if(novoY >= alturaMaxima){
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }
    
    this.setY(altura / 2)
}


function Progresso(){
    this.elemento = newElement('span', 'progresso')
    this.atualizarpontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarpontos(0)
    
}
// const barreiras = new Barreiras(700,1100,400,400)
// const passaro = new Passaro(700)
// const areaJogo = document.querySelector('[wm-flappy]')
// areaJogo.appendChild(new Progresso().elemento)
// areaJogo.appendChild(passaro.elemento)
// barreiras.pares.forEach(par => areaJogo.appendChild(par.elemento))
// setInterval(() => {
    
    //     barreiras.animar()
    //     passaro.animar()
    
    //  }, 15);
    
    function Sobrepor(elementoA, elementoB){
        const a = elementoA.getBoundingClientRect()
        const b = elementoB.getBoundingClientRect()
        
        const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
        
        const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
        return horizontal && vertical
        
    }
    
    function Colidiu(passaro, barreiras){
        let colidiu = false
        barreiras.pares.forEach(ParDeBarreiras => {
            if (!colidiu){
                const superior = ParDeBarreiras.superior.elemento
                const inferior = ParDeBarreiras.inferior.elemento
                colidiu = Sobrepor(passaro.elemento, superior) 
                || Sobrepor(passaro.elemento, inferior)
            }
        })
        return colidiu
    }
    
    function Flappy(){
        let pontos = 0
        const areaJogo = document.querySelector('[wm-flappy]')
        
        const altura = areaJogo.clientHeight
        const largura = areaJogo.clientWidth
        
        const progresso = new Progresso()
        const barreiras = new Barreiras(altura,largura,500,400, 
            () => progresso.atualizarpontos(++pontos))
            const passaro = new Passaro(altura)
            
            areaJogo.appendChild(progresso.elemento)
            areaJogo.appendChild(passaro.elemento)
            barreiras.pares.forEach(par => areaJogo.appendChild(par.elemento))
            
            this.start = () => {
                const temp = setInterval(() => {
                    barreiras.animar()
                    passaro.animar()
                    
                    
                    // if(Colidiu(passaro, barreiras)){
                    //     clearInterval(temp)
                    // }
                }, 20)
                
            }
            
        }
        
        new Flappy().start()