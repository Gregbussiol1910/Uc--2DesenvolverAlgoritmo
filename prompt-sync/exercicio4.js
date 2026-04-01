const prompt = require('prompt-sync')()

let nome = prompt("Digite aqui seu nick: ")
let profissao = prompt("Qual a profissão do seu personagem? ")
let arma = prompt("escolha uma arma para seua personagem: ")

console.log(`Olá ${nome} você é um ${profissao} e usa um(a) ${arma} como arma de combate`) 