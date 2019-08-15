var javier = {
    nombre: 'Javier',
    edad: 40,
    ingeniero: true,
    doctor: false,
    dj: false,
    padre: true,
    altura: 1.71
}

var arlette = {
    nombre: 'Arlette',
    edad: 40,
    altura: 1.55
}

var manuel = {
    nombre: 'Manuel',
    edad: 10,
    altura: 1.4
}

var luis = {
    nombre: 'Luis',
    edad: 7,
    altura: 1.3
}

const esAlta = ({ altura }) => altura > 1.5
const esBaja = ({ altura }) => altura <= 1.5

var personas = [javier, arlette, manuel, luis]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)
