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
    if (persona.edad >= 18)
        console.log(`${persona.nombre} es mayor de edad`)
    else
        console.log(`${persona.nombre} es menor de edad`)
}

console.log(imprimirProfesiones(javier))
console.log(imprimirSiEsMayorDeEdad(javier))
console.log(imprimirSiEsMayorDeEdad(manuel))
