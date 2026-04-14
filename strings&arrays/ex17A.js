let animais = ["cachorro", "gato", "coelho"]
animais.push("Elefante")
console.log(animais)

animais.unshift("Leão")
console.log(animais)

animais.shift()
console.log(animais)

animais.pop()
console.log(animais)

let novosAnimais = ["jaguátirica", "Capivara"]
let zoologico = animais.concat(novosAnimais)
console.log(zoologico)