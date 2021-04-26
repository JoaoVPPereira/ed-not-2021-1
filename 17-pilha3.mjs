import { Stack } from './lib/Stack.mjs'

const expr = '2 + { 3 * [5 + 8 - (9 / 3) + 1] / 2 }'

let info

const analisador = new Stack()

for(let i = 0; i < expr.length; i++) {
    switch(expr.charAt(i)) {
        case '{':
            analisador.push({tipo: 'ABRE_CHAVES', posicao: i})
            break
        case '[':
            analisador.push({tipo: 'ABRE_COLCHETES', posicao: i})
            break
        case '(':
            analisador.push({tipo: 'ABRE_PARENTESES', posicao: i})
            break
        case '}':
            let info = analisador.pop() // tira da pilha
            if(info.tipo === 'ABRE_CHAVES')
                console.log(`Chave aberta na posição ${info.posicao} foi fechada na posição ${i}.`)
            else
                console.log(`ERRO: esperado fecha chaves na posição ${i}, aberta na posição ${info.posicao}`)
            break
        case ']':
            let info = analisador.pop() // tira da pilha
            if(info.tipo === 'ABRE_COLCHETES')
                console.log(`Chave aberta na posição ${info.posicao} foi fechada na posição ${i}.`)
            else
                console.log(`ERRO: esperado fecha chaves na posição ${i}, aberta na posição ${info.posicao}`)
            break
        case ')':
            let info = analisador.pop() // tira da pilha
            if(info.tipo === 'ABRE_PARENTESES')
                console.log(`Chave aberta na posição ${info.posicao} foi fechada na posição ${i}.`)
            else
                console.log(`ERRO: esperado fecha chaves na posição ${i}, aberta na posição ${info.posicao}`)
            break
        

    }
}