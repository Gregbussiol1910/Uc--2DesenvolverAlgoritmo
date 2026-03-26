// Operadores lógicos utilizados para testas

/* - Operador E (tudo deve ser verdadeiro). Representamos com: &&

- Operador OU (umacondição sendo verdadeira já basta). representamos com: ||

- Operador NAo (inverte o valor). Representamos com: ! */


const idade = 44 // idade da pessoa
const temAssinatura = false // indica se a pessoa tem assinatura ativa

// verificando se a pessoa pode acessar
// consições:
// - Precisa ser maior ou igual a 18 anos (>= 18)
// E &&
// - Tem que ter assinatura (true)

const podeAcessar = idade >= 18 && temAssinatura
console.log(podeAcessar)