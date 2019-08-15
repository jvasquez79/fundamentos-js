var javier = {
    nombre: 'Javier',
    edad: 40,
    peso: 75
}

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const META = javier.peso - 3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

var dias = 0

console.log(`Al inicio del año ${javier.nombre} pesa ${javier.peso}kg`)

while (javier.peso > META) {    
    debugger
    if (comeMucho()) {
        aumentarDePeso(javier)
    }
    if (realizaDeporte()) {
        adelgazar(javier)
    }
    dias++
}

console.log(`Pasaron ${dias} días hasta que ${javier.nombre} adelgazó 3kg`)

