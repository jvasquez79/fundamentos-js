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
    altura: 1.71
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

var personas = [javier, arlette, manuel, luis]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}m`)
}