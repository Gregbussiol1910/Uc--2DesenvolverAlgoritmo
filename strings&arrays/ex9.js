let ataques = " kamehameha, genki-dama, kaioken, spririt bomb "

let atq = ataques.trim()
let atq2 = atq.toUpperCase()
let atq3 = atq2.replaceAll(",", "|")
console.log(atq3)
console.log(atq2.includes("SPIRIT BOMB"))
console.log(atq2.length)