function intercambio(real){
    const bolivar = (real * 95.5)
    const dolar = (real * 0.20)
    const euro = (real * 0.17)

console.log(`${real} Reais equivale a ${bolivar.toFixed(1)} bolivár`)
console.log(`${real} Reais equivale a ${dolar.toFixed(1)} Dólares`)
console.log(`${real} Reais equivale a ${euro.toFixed(1)} Euros`)
}
intercambio(1800)