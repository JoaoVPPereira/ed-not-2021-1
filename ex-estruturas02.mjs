/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 26/05, até 11h20, valendo nota de participação
*/

import { Deque } from './lib/Deque.mjs'

const texto = "Anotaram a data da maratona"

// Usando um vetor como pilha
const deque = new Deque()

// Desmontando o texto e colocando cada letra no deque
for(let i = 0; i < texto.length; i++) {
    // Inserção no final
    deque.insertBack(texto.charAt(i))
}


console.log(deque.print())

let textoRev = ''

while(! deque.empty) {
    textoRev += deque.removeBack()
}

console.log(texto)
console.log(textoRev)