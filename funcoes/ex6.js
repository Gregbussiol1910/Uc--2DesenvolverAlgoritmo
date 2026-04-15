const prompt = require('prompt-sync')({sigint: true})


function criarApelido(){
    const nome = prompt("Digite aqui seu nome: ")
    const apelido = prompt("Digite aqui um animal de sua preferencia: ")

    console.log(`Seu novo apelido agora é ${nome} ${apelido}!`)
}
criarApelido()