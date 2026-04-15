//importar a biblioteca
const prompt = require('prompt-sync')({sigint: true})

// função que pede números, calcula e imprime
function calcularEimprimir(){
    const a = Number(prompt("Digite o primeiro número: "))
    const b = Number(prompt("Digite o segundo número: "))

    soma = a + b
    subtracao = a - b
    multiplicacao = a * b
    divisao = a / b
    modulo = a%b

    console.log( "Resultados: ")
    console.log( "soma: ", soma)
    console.log( "subtração: ", subtracao)
    console.log( "multiplicação: ", multiplicacao)
    console.log( "divisão: ", divisao)
    console.log( "módulo: ", modulo)

}
calcularEimprimir()