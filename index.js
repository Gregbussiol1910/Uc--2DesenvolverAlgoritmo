const prompt = require('prompt-sync')()

// let nome = prompt("Qual seu nome? ")
// let idade = prompt("qual a sua idade? ")

// console.log(`Olá ${nome} você tem ${idade} anos de idade.`)
// let nome2 = prompt("Digite aqui seu nome: ")
// let idade2 = prompt("Digite aqui sua idade: ")
// let cidade = prompt("Digite aqui sua cidade: ")

// console.log(`Olá ${nome2} você tem ${idade2} e mora em ${cidade}`)


// let nome_cliente = prompt("qual seu nome? ")
// let sabor = prompt("Qual sabor de pizza você deseja? ")
// let tamanho = prompt("Qual o tamanho de pizza você deseja? ")

// console.log(`Olá ${nome_cliente} você pediu uma pizza ${tamanho} de ${sabor}`)

// let nome = prompt("Digite aqui seu nick: ")
// let profissao = prompt("Qual a profissão do seu personagem? ")
// let arma = prompt("escolha uma arma para seua personagem: ")

// console.log(`Olá ${nome} você é um ${profissao} e usa um(a) ${arma} como arma de combate`) 

const nome = prompt("Digite aqui seu nome: ")
const idade = prompt("Digite aqui sua idade: ")
let gosto = prompt("O que você gosta de fazer? ")
let anime = prompt("Qual seu anime favorito? ")
let serie = prompt("Qual sua série favorita? ")
let curiosidade = prompt("Fale uma curiosidade sobre você: ")
let time = prompt("Se tiver, qual seu time do coração? ")

console.log(`Olá ${nome} sua idade é de ${idade} anos, você gosta de ${gosto}, seu anime favorito é ${anime}, sua série favorita é ${serie}, uma curiosidade sobre você é que ${curiosidade} e seu time de coração (se tiver) é ${time}`)
