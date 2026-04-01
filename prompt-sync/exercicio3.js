const prompt = require('prompt-sync')()

let nome_cliente = prompt("qual seu nome? ")
let sabor = prompt("Qual sabor de pizza você deseja? ")
let tamanho = prompt("Qual o tamanho de pizza você deseja? ")

console.log(`Olá ${nome_cliente} você pediu uma pizza ${tamanho} de ${sabor}`)