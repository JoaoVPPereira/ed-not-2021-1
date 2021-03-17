// NÚMEROS
let a = 10, b = 15, c = 10
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('-----------------------------')

// STRINGS
a = 'MARIA'
b = 'SEBASTIANA'
c = 'MARIA'
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('-----------------------------')

// BOOLEANS
a = true
b = false
c = true
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('-----------------------------')

// VETORES
a = [1, 2, 3, 4, 5]
b = [10, 20, 30 , 40, 50]
c = [1, 2, 3, 4, 5]
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('-----------------------------')

// Na comparação de vetores, os resultados para maior e menor não são consistentes
// CONCLUSÃO: vetores NÃO SÃO direramente comparáveis entre si

// OBJETOS
a = {marca = 'Volkswagen', modelo: 'Fusca', ano = 1976}
b = {marca = 'Fiat', modelo: '147', ano: 1980}
c = {marca = 'Volkswagen', modelo: 'Fusca', ano = 1976}
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('-----------------------------')

// Objetos também apresentam inconsistência quando comparados diretamente

// CONLCUSÃO GERAL
// Tipos de daos que são comparáveis em JS: number, string, boolean