var javier = {
    nombre: 'Javier',
    edad: 40,
    peso: 75
}

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


console.log(`Al inicio del año ${javier.nombre} pesa ${javier.peso}kg`)

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()
    if (random < 0.25) {
        aumentarDePeso(javier)
    } else if (random < 0.5) {
        adelgazar(javier)
    }
    
}

console.log(`Al final del año ${javier.nombre} pesa ${javier.peso.toFixed(1)}kg`)

