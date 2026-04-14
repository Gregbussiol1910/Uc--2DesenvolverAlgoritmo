// funções:
//Uma função é um bloco de codigo que executa uma tarefa específica.
//
//recebe algo(entrada ou parametros)
//processa algo
//entrega um resultado (saída ou retorno)

//////////////////////////////////
//declarando a função
function imprimirOlaMundoo(){
    console.log("Olá mundo!") // ação da função
}

//chamada da função para executar
imprimirOlaMundoo()

/////////////////////////////////
//2. função com parametros
//pode passar imformaçoes para a função. Essas informaçoes são os parametros que ela vai precisar para executar sua tarefa.

////////////////////////////////
//função que soma dois numeros
function somar(a,b){
    return a + b
}
// chamada da função
let resultado = somar(5,3)
console.log(resultado)

let resultado2 = somar(3256,4839)
console.log(resultado2)