// importar a biblioteca
const prompt = require('prompt-sync')({sigint: true})
//função simples para comprimentar o usuario
function comprimentarUsuario(){
    //pede o nome do usuario
    const nome = prompt("Digite seu nome cara:")

    // mostra uma saudação personalizada
    console.log(`Ola, ${nome}! Seja bem-Vindo a turma TDS216T! `)

}
//chamar a função
comprimentarUsuario()