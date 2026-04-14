// A propriedade length nos diz qual é o tamanho de uma string, incluindo os espaços

const nome = "Cleiton antonio cavalo"
console.log(nome.length)

const nome2 = "Monkey D. Luffy"

console.log(nome2.length)

//////////////////////////////////////////////////////////////
// metodo: tolowercase()
// transforma todas as letras da string em minuscula

const frase = "O dia está LINDOOOOO!"
const frase_minuscula = frase.toLowerCase()
console.log(frase_minuscula)
//////////////////////////////////////////////////////////////
//Método: toUppercase()
// transforma todas as letras da strings em maiusculo

const frase2 = "o dia está lindo"
const frasemaiuscula = frase2.toUpperCase()
console.log(frasemaiuscula)

///////////////////////////////////////////////////////////////
//Método: trim()
//retira os espaços que existem antes e depois de sua string (Útil em formularios e login)

const email = "     canequinhogamer@gmail.com        "
console.log(email.trim())
///////////////////////////////////////////////////////////////
//Método: includes(caracteres): determina se um conjunto de caracteres po ser encontrado dentro de outra string, retorna um valor booleando true ou false
const frase3 = "Hoje eu comi batata"
console.log(frase3.includes("batata"))
console.log(frase3.includes("cenoura"))

const frase4 = "A força de um guerreiro não vem de vencer sozinho, mas de nunca desistir de lutar pelo que acredita."

console.log(frase4.includes("guerreiro"))
console.log(frase4.includes("desiste"))
console.log(frase4.includes("luta"))
console.log(frase4.includes("acreditar")) 

/////////////////////////////////////////////////////////////
//Método: replaceAll(chars1, chars2): troca todas as ocorrencias de um conjunto de caracteres (char1) por alguma outra coisa (char2)
const frase5 = "hoje comi muita batata, adoro batata"
const novafrase5 = frase5.replaceAll("batata", "cenoura")
console.log(novafrase5)
/////////////////////////////////////////////////////////////