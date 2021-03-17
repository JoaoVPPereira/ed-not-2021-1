/* 

    ALGORITMO DE ORDENAÇÃO BUBBLE SORT

    Percorre o vetor comparando um elemento com seu sucessor. Caso
    o sucessor seja menor que o valor atual, ocorre a troca entre eles.
    Esse processo se repete em várias passadas até que, no percurso final, nenhuma troca seja feita.
*/

let totTrocas, comps, pass

function bubbleSort(vetor) {
    totTrocas = 0, comps = 0, pass = 0
    let trocas
    do {
        trocas = 0 // Início de uma nova passada
        pass++
        // Percurso do vetor do início até o PENÚLTIMO elemento
        for(let i = 0; i <= vetor.length - 2; i++) {
            if(vetor[i] > vetor[i + 1]) {
                //let aux = vetor[i]
                //vetor[i] = vetor [i + 1]
                // vetor[i + 1] = aux

                // Troca direta em JavaScript usando desestruturação de vetores
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]

                trocas++
            }
            comps++
        }
        totTrocas += trocas

    } while(trocas > 0)
}

// let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

// Pior caso
let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

console.log('Antes', nums)
bubbleSort(nums)
console.log('Depois', nums)
console.log({totTrocas, comps, pass})

import { nomes } from './includes/100-mil-nomes.mjs'

console.log('Antes', nomes)
console.time('Ordenando nomes...')
bubbleSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log({totTrocas, comps, pass, memoria})
console.log('Depois', nomes)