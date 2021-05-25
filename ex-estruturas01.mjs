/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 26/05, até 11h20, valendo nota de participação
*/

function dec2Bin(decNumber) {
    var restStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0) {
        rest = Math.floor(decNumber % 2)
        restStack.push(rest)
        decNumber - Math.floor(decNumber / 2)
    }

    while(restStack.length > 0) {
        binaryString += restStack.pop().toString()
    }

    return binaryString
}

console.log(dec2Bin(25))