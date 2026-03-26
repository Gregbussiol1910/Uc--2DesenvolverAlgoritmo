const identidade = true 
const idade = 15
const autorizacao = true

const compra = identidade && idade >= 18 || autorizacao && identidade 

console.log("A pessoa comprou a passagem? " + compra)