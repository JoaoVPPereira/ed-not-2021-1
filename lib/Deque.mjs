/*
    ESTRUTURA DE DADOS DEQUE
    Deque = Double-Ended Queue (fila de duas pontas)
    - Deque é uma lista linear de acesso restrito, que permite apenas as operações
    de inserção e retirada em QUALQUER UMA de suas pontas. Em outras palavras,
    a inserção pode acontecer tanto no início quanto no fonal, e a retirada também
    pode ser feita em ambas as extremidades.
    - Como consequência, o deque não funciona nem pelo FIFO nem pelo LIFO.
    - A principal aplicação do deque é o gerenciamento de filas com atendimento
    prioritário e desistência no final da fila.
*/

export class Deque {
    #data

    constructor() {
        this.#data = []     // Vetor vazio
    }

    insertFront(val) {
        this.#data.unshift(val) // Insere valor no inicio do vetor
    }

    insertBack(val) {
        this.#data.push(val) // Insere valor no final do vetor
    }

    removeFront() {
        return this.#data.shift() // Retira o valor no inicio do vetor
    }

    removeBack() {
        return this.#data.pop() // Retira o valor no final do vetor
    }

    peekFront() {
        return this.#data[0] // Verifica quem será o próximo atendido no início do vetor
    }

    peekBack() {
        return this.#data[this.#data.length - 1]
    }

    print() {
        return JSON.stringify(this.#data)
    }

    get empty() {
        return this.length === 0
    }
}