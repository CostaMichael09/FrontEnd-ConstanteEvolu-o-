function compras(trab1, trab2){
    const ComprarTv50 = trab1 && trab2 // operador logico 'e''
    const ComprarSorvete = trab1 || trab2 // operador logico 'ou''
    const ComprarTv32 = trab1 != trab2 //operador logico 'Se/Entao' ou 'XOR''
    const NaoTomarSorvete = !ComprarSorvete

    return {ComprarSorvete, ComprarTv32, ComprarTv50, NaoTomarSorvete}
}

console.log(compras(true,true))
