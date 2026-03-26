const t1 = 4
const t2 = 6
const t3 = 8

const nota = t1 + t2 + t3
const nota_final = nota / 3

const aprovado_NF = nota_final > 7

console.log(" O aluno foi passado direto?" + aprovado_NF)

const r_t1 = 7
const r_t2 = 8
const r_t3 = 4
const nota_NR = r_t1 + r_t2 + r_t3
const nota_finalNR = nota_NR /3

const aprovado_NR = nota_finalNR >= 8 ||  r_t1 > 6 && r_t2 > 6

console.log("O aluno passou pela recuperação?" + aprovado_NR)

const reprovacao = aprovado_NF < 7 && nota_finalNR < 8 && r_t1 < 6 && r_t3 < 6

console.log("O aluno reprovou?" + reprovacao)