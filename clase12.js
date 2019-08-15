var javier = {
    nombre: 'Javier',
    edad: 40,
    ingeniero: true,
    doctor: false,
    dj: false,
    padre: true
}

var manuel = {
    nombre: 'Manuel',
    edad: 10
}

const MAYORIA_DE_EDAD = 18

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero)
        console.log('Ingeniero')
    if (persona.doctor)
        console.log('Doctor')
    if (persona.dj)
        console.log('DJ')
    if (persona.padre)
        console.log('Padre de familia')
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona))
        console.log(`${persona.nombre} es mayor de edad`)
    else
        console.log(`${persona.nombre} es menor de edad`)
}

/* //Se asigna una función a una variable
const esMayorDeEdad = function (persona) {    
    return persona.edad >= MAYORIA_DE_EDAD
} */

//Arrow function
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
//Arrow function con descomposición
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = persona => !esMayorDeEdad(persona)

function permitirAcceso(persona) {
    if (esMenorDeEdad(persona)) {
        console.log(`ACCESO DENEGADO PARA ${persona.nombre}`)
    } else {
        console.log(`ACCESO CONCEDIDO PARA ${persona.nombre}`)
    }
}

console.log(imprimirProfesiones(javier))
console.log(imprimirSiEsMayorDeEdad(javier))
console.log(imprimirSiEsMayorDeEdad(manuel))
console.log(`${javier.nombre} es mayor de edad? ${esMayorDeEdad(javier)}`)
console.log(`${manuel.nombre} es mayor de edad? ${esMayorDeEdad(manuel)}`)
console.log(permitirAcceso(javier))
console.log(permitirAcceso(manuel))
console.log(`${javier.nombre} es menor de edad? ${esMenorDeEdad(javier)}`)
console.log(`${manuel.nombre} es menor de edad? ${esMenorDeEdad(manuel)}`)
