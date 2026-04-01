const prompt = require('prompt-sync')()

const nome = prompt("Digite aqui seu nome: ")
const idade = prompt("Digite aqui sua idade: ")
let gosto = prompt("O que você gosta de fazer? ")
let anime = prompt("Qual seu anime favorito? ")
let serie = prompt("Qual sua série favorita? ")
let curiosidade = prompt("Fale uma curiosidade sobre você: ")
let time = prompt("Se tiver, qual seu time do coração? ")

console.log(`Olá ${nome} sua idade é de ${idade} anos, você gosta de ${gosto}, seu anime favorito é ${anime}, sua série favorita é ${serie}, uma curiosidade sobre você é que ${curiosidade} e seu time de coração (se tiver) é ${time}`) 