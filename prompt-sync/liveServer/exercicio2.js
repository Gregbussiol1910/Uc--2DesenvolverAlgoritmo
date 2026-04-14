let ingrediente1 = prompt("Escolha seu primeiro ingrediente (escamas de cobra, lagrima de jacaré, olho de morcego ou bico de pato):")
let ingredientes2 = prompt("Escolha seu segundo ingrediente (escamas de cobra, lagrima de jacaré, olho de morcego ou bico de pato):")

let quant = prompt("coloque a quantidade do seu primeiro ingrediente que você ira utilizar: ")
let quant2 = prompt("coloque a quantidade do seu segundo ingrediente que você ira utilizar: ")

quant = Number(quant)
quant2 = Number(quant2)

let total = quant + quant2

alert("Você misturou " + quant + " quantidade do ingrediente " + ingrediente1 + " com " + quant2 + " quantidade de " + ingredientes2 + ", Dando um total de " + total + " ingredientes misturados") 