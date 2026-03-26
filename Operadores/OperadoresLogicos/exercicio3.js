// verificando se a pessoa pode usar o cupom
// consições:
// - Precisa ter gastado acima de R$100 (> 100)
// OU - ||
// - Tem que ser cliente vip (true)

const compras = 101
const clienteVip = false

const cupom = compras > 100 || clienteVip
console.log(cupom)