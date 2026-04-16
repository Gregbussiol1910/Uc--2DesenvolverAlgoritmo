// Estruturas condicionais em javaScript
////////////////////////////////////////
//definição: permitir executar diferentes códigos dependendo de certas condições
////////////////////////////////////////

// IF (se)

let idade = 18
if(idade >= 18){
    console.log("Você é maior de idade.")
}
// o código dentro do bloco {} só será executado se a condição for verdadeira
////////////////////////////////////////
// Else (se não)

let idade2 = 16
if(idade2 >= 18){
    console.log("você é maior de idade")
}else{
    console.log("você é menor de idade parça.")
}
// O else executado apenas quando a consição do if é falsa
//---------------------------------------
// else if (Senão se)

let nota = 100
if(nota >= 90){
    console.log("Parabéns, você não é um cavalo e tirou A.")
}else if(nota >= 70){
    console.log("você tirou B.")
}else if(nota >= 50){
    console.log("você tirou C.")
}else{
    console.log("Você reprovou!")
}
//----------------------------------------
//Operadores lógicos 
//Podemos combinar condições usando operadores
// && -> E
// || -> OU
// ! -> NÃO

let idade3 = 20
let temCarteira = true

if(idade3 >= 18 && temCarteira){
    console.log("Pode dirigir!!!")
}else{
    console.log("No puede ")
}