let heroi1 = " Naruto " 
let heroi2 = " Deku "

let h1 = heroi1.trim()
let h2 = heroi2.trim()

let h1_new = h1.toUpperCase()
let h2_new = h2.toLowerCase()

let frase = "Naruto encontra deku no mndo ninja"
let frase2 = frase.replaceAll("deku", h2_new)

console.log(frase2)
console.log(frase2.includes("Naruto"))
