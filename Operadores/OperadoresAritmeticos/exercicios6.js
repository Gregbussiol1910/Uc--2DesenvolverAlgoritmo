const pizza = 40
const refrigerante = 12
const total = pizza * 3 + refrigerante * 2
const desconto = 0.10
const Valor_desconto = total * desconto 
const valor_total = total - Valor_desconto
const valor_de_cada = valor_total / 3 


console.log(Valor_desconto)
console.log(total)
console.log(valor_de_cada.toFixed(2))

