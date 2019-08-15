var javier = {
    nombre: 'Javier',
    edad: 40,
    ingeniero: true,
    doctor: false,
    dj: false,
    padre: true,
    altura: 1.71,
    cantidadDeLibros: 100
}

var arlette = {
    nombre: 'Arlette',
    edad: 40,
    altura: 1.55,
    cantidadDeLibros: 50
}

var manuel = {
    nombre: 'Manuel',
    edad: 10,
    altura: 1.4,
    cantidadDeLibros: 10
}

var luis = {
    nombre: 'Luis',
    edad: 7,
    altura: 1.3,
    cantidadDeLibros: 5
}

//<>
var personas = [javier, arlette, manuel, luis]
var acum = 0
for (var i = 0; i < personas.length; i++) {
    acum += personas[i].cantidadDeLibros
}

const reducer = (acum, { cantidadDeLibros }) => acum += cantidadDeLibros
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`Cantidad de libros en ciclo for ${acum}`)
console.log(`Cantidad de libros con reduce ${totalDeLibros}`)
