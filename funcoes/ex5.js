const prompt = require('prompt-sync')({sigint: true})

function poderes(){
    const poder = prompt("Ei cara, qual seu superpoder favorito?")
    console.log(`Uau! Ser capaz de ter ${poder} seria incrível!!`)
}
poderes()