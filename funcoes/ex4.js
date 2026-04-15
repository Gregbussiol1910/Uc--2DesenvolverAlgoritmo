function converterParaCelsius(fahrenheint){
    const celsius = (fahrenheint - 32) * 5/9
    console.log(`${fahrenheint} ºF equivalente a ${celsius.toFixed(1)} ºC`)
}
//exemplo de uso
converterParaCelsius(23)