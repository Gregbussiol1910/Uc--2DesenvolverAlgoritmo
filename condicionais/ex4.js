const prompt = require('prompt-sync')({sigint: true})

let escolha = prompt("escolha um traço (Inteligência),(Lealdade),(coragem),(nenhum): ")
if(escolha == "coragem"){
    console.log("Você é a Eleven!")
}else if(escolha == "lealdade"){
    console.log("Você é o Mike!")
}else if(escolha == "inteligencia"){
    console.log("Você é o Will!")
}else{
    console.log("Você é um Demogorgon!")
}