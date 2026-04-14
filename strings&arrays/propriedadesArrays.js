//Arrays são listas de elementos ou uma estrutura de dados maior


const lista_compras = ["batata", "alface", "queijo"]
console.log(lista_compras)

// Arrays armazenam elementos de qualquer tipo
const meuArrayDiverso = ["greg", 17, true]
console.log(meuArrayDiverso)

// Arryas tem índices para "endereçar" seus elementos e SEMPRE começa em 0
// const arrayFrutas = ["banana", "maça", "tomate"]
//       indíice     ->    0         1       2 
// Para acessar esse elemento, basta informar o seu endereço/ indíce
// const segundoItem = arrayFrutas[2]

const arrayFrutas = ["banana", "maça", "tomate"]
const segundoItem = arrayFrutas[2]
console.log(segundoItem)

///////////////////////////////////////////
//PROPRIEDADES DE ARRAYS
//
//Propriedades lengt: nos diz qual é a quantidade de itens de um array

const pokemons = ["bulbasauro", "squirtle", "charmander"]
const quantidadeitens = pokemons.length
console.log(quantidadeitens)
///////////////////////////////////////////
// Propriedade  ou metodo includes(elemento): determina se um array contém um determinado elemento. sempre retrona em true(se sim) ou false(se não)
const seriesBoas = ["Brealing Bad", "Brooklyn nine-nine"]

const temBreakingBad = seriesBoas.includes("Breaking Bad")
const temGOT = seriesBoas.includes("Broklyn nine-nine")

console.log("Na array seriesBoas, tem Breaking Bad? ", temBreakingBad)
console.log("Na array seriesBoas, tem Broklyn nine-nine ? ", temGOT)

///////////////////////////////////////////
//Propriedade ou método push(elemento): adiciona um ou mais elementos ao FINAL de um array

const numeros = [1, 2, 3]
numeros.push(4)

console.log(numeros)
numeros.push(5, 6, 7)
console.log(numeros)

//////////////////////////////////////////
//Propriedades ou método unshift(): adicionar um novo item no começo do array
let cores = ["azul", "verde"]
cores.unshift("vermelho")
console.log(cores)

/////////////////////////////////////////
// propiedade ou método shift() : remove do começo (o primeiro item do array)

let frutas = ["maça", "banana", "laranja"]
frutas.shift()
console.log(frutas)

////////////////////////////////////////
//propriedade ou método pop(): remove o último elemento de um array

let meusPeixes = ["palhaço", "mandarim", "esturjão"]
meusPeixes.pop()
console.log(meusPeixes)
////////////////////////////////////////
//Propriedade ou método splice(i,n): remove (n) elementos à partit da posição (i) do array

let letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// indices (i) 0    1    2    3    4   5    6     7

console.log("Array completa", letras)
// aplicando o método splice(i,n)
// da array letras, na posição 2 ("C") remove 1 elemento (o próprio "C")
let letrasRetiradas = letras.splice(2, 1)
console.log("Array com splice(2, 1)", letrasRetiradas)

console.log(" Assim fica a array sem os elementos retirados: ", letras)

// array letras, na posição 3 ("D") remove 2 ("E" e "F")
let letrasRetiradas2 = letras.splice(3, 2)
console.log("Arrays com splice(3,2): ", letrasRetiradas2)

console.log("Assim fica a array sem os elementos retirados: ", letras)

/////////////////////////////////////
// propriedade ou método concat(): junta dois arrays para formar um novo array
let frutas2 = ["maça", "banana"]
let legumes = ["cenoura", "batata"]
let alimentos = frutas2.concat(legumes)
console.log(alimentos)

////////////////////////////////////
//Propriedade ou métodos .sort(): ele organiza os itens em ordem crescente (por padrão, ordem alfabética para strings)

let frutas3 = ["Banana", "Tangerina dos gusta", "Bergamota", "Laranja"]
frutas3.sort()
console.log(frutas3)